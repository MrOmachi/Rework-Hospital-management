import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { ListBeneficiaryOwners } from "../components/listBeneficiaryOwners";
import { AddBeneficiaryOwner, ContinueLong } from "../../../components/buttons/Buttons";
import SoleOwner from "../components/soleOwner";
import NonSoleOwner from "../components/nonSoleOwner";
import { setkycInfo } from "../../../redux/Kyc/kycSlice";

interface ISteps{
  currentStep?: number;
  nextStep?: any; 
  openForm?: any;
  setIndex?: any;
  index?: any;
  opened: boolean;
}

function BeneficialOwners(props:ISteps) {
  const { BusinessKyc } = useAppSelector((state) => state.kycInfo);
  const dispatch = useAppDispatch();
  
  const EditBeneficiary= (i: any)=>{
    props?.setIndex(i);
    props?.openForm(true);
  }

  const DeleteBeneficiary = (i: any)=>{
    props.setIndex(i);
    const BeneficiaryOwners = BusinessKyc.BeneficiaryOwners.filter((Owners,index) => index !==i);
    dispatch(
      setkycInfo({
        ...BusinessKyc,
        BeneficiaryOwners,
      })
    );
  };

  const Add= ()=>{
    props.setIndex(undefined);
    props.openForm(true);
  }

  const proceed = () => {
    if(props.currentStep){
      props.nextStep(props?.currentStep +1);
  }
  
};

  return (
    <form
    className="w-[75%] sm:w-[60%] md:w-[75%] h-[100vh]">
    <div className="w-[52%] ml-6">
      <div>
        <h3 className="font-semibold text-[20px] pb-3 ">
        {BusinessKyc.Type==="Sole Proprietorship" ? 
        'Tell us about the Owner':'Beneficial Owners'}
        </h3>

        <p className="text-[13px] mb-7 text-[#747A80]">
        {BusinessKyc.Type==="Sole Proprietorship" ? 
        'Due to regulatory guidelines, we’re required to collect information on anyone who has significant ownership of your business':
        'Make sure you enter your information exactly as it appears on your government-issued ID.'}
        </p>


        {BusinessKyc.Type!=="Sole Proprietorship" &&
        <p className="text-[13px] mb-7 text-[#747A80]">
        Please add any individual who owns 25% or more of {BusinessKyc.BusinessName}
         </p>}
        
         {props.opened ?
            <NonSoleOwner index={props.index} openForm={props.openForm}/>
            :<>
              {BusinessKyc.Type!=="Sole Proprietorship" &&
                <>
                {BusinessKyc?.BeneficiaryOwners?.length > 0 && 
                <> 
                  <ListBeneficiaryOwners items={BusinessKyc.BeneficiaryOwners} edit={EditBeneficiary} delete={DeleteBeneficiary}/>
                </>}
                <AddBeneficiaryOwner action={Add} size={BusinessKyc.BeneficiaryOwners.length}/>
                <br/>
                <ContinueLong action={proceed} isButtonDisabled={BusinessKyc.BeneficiaryOwners.length < 1}/>
                </>
              }
              
              {
              BusinessKyc.Type==="Sole Proprietorship" &&
                <>
                <SoleOwner proceed={proceed} index={0} nextStep={props.nextStep} currentStep={props.currentStep}/>
                </>
              }
            </>
        }

              <br/>
              <br/>
              <br/>
              <br/>
              <br/>

      </div>
    </div>
  </form>
  );
}
export default BeneficialOwners;
