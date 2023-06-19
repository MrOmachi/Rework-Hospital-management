import { useAppSelector } from "../../../app/hooks";
import {  pencil } from "../../../Image";
import { AgreeAndSubmit, SaveForLater } from "../../../components/Buttons/Buttons";
import { useDispatch } from "react-redux";
import { createKyc, updateKyc } from "../../../api";
import { ListBeneficialOwners } from "../components/listBeneficialOwners";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setkycInfo } from "../../../features/Kyc/kycSlice";

interface ISteps{
  currentStep?: number | 0;
  nextStep?: any;
  openForm?: any;
  setIndex?: any;
  index?: any;
  saveForLater?: any;
}

function ReviewKyc(props:ISteps) {
  const { BusinessKyc } = useAppSelector((state) => state.kycInfo);
  const [ loading, setLoader] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const EditStep = (step:any) =>{
    props.nextStep(step);
  }  

  const handleSave = ()=>{
    navigate("/");
    props?.saveForLater();
  }

  const EditOwner = (step:any,index:any) =>{
    props.nextStep(step);
    props.setIndex(index);
  } 

  const handleSubmit = async () => {
      const KycIdentifier:any = localStorage.getItem("KycIdentifier");
      setLoader(true);
      if(KycIdentifier !==undefined || null){
        console.log("updating kyc...");
        updateKyc(KycIdentifier, {BusinessKyc:BusinessKyc}).then((response:any) => {
          dispatch(setkycInfo(response.data.BusinessKyc));
          if(props.currentStep){
            props.nextStep(props?.currentStep + 1);
          }
       })
      }else{
        console.log("creating kyc...");
        createKyc({BusinessKyc:BusinessKyc}).then((response:any) => {
            setLoader(false);
            localStorage.setItem("KycIdentifier",response.data.KycIndetifier);
            props?.saveForLater();
            if(props.currentStep){
              props.nextStep(props?.currentStep + 1);
            }
          }).catch((error)=>{
            setLoader(false);
          });
      }
    };
  
  return (
    <div className="flex justify-evenly w-full lg:mt-14 sm:mt-14 xs:mt-10">

    <div className="lg-[75%] sm:w-[70%] md:w-[75%] xs:w-[70%] h-[100vh]">
      <div className="lg:w-[52%] md:w-[50%] sm:w-[85%] lg:pl-0 sm:pl-8">
        <h3 className="font-semibold lg:text-[20px] md:text-[20px] sm:text-[17px] pb-3 ">
          Review & Submit
        </h3>
        <p className="lg:text-[14px] sm:text-[12px] xs:text-[10px] text-[#747A80] ldg:mb-8 md:mb-7 sm:mb-5 ">
          You’re almost done. Take a moment to review and confirm
          <br className="sm:hidden" /> your submission.
        </p>
        <div className="mt-6 ">
          <b className="lg:text-[15px] sm:text-[13px] pb-1 font-medium">
            Business Details
          </b>
          <div className="relative flex justify-between rounded-[13px] border p-3 lg:text-[15px] sm:text-[13px] text-[#747A80] bg-[#FFFCF1]">
            <div>
              <p className="mb-2">
                {BusinessKyc.BusinessName}
              </p>
              <p className=" pb-2">
                {BusinessKyc?.RegisteredAddress?.StreetAddress}
              </p>
              <p className="space-x-2">
                <span>
                  {BusinessKyc?.RegisteredAddress?.City},
                </span>
                <span>
                  {BusinessKyc?.RegisteredAddress?.Country}
                </span>
              </p>
            </div>
            <img
              className="xl:w-[15px] lg:w-[15px] md:w-[15px] sm:w-[12px] xs:w-[10px] absolute  xl:ml-[340px] lg:ml-[260px] md:ml-[270px] xs:ml-[110px]
              sm:ml-52  cursor-pointer"
              onClick={()=>EditStep(1)}
              src={pencil}
              alt=""
            />
          </div>
        </div>

        <br/>

        {BusinessKyc?.BeneficialOwners?.length > 0 ? 
        <>
        <ListBeneficialOwners items={BusinessKyc.BeneficialOwners} edit={(index:any)=>EditOwner(2,index)}/>
        </>:
        null}

        <div className="">
          <div className="mb-1">
            <AgreeAndSubmit action={handleSubmit} loading={loading}/>
          </div>
          <div>
            <SaveForLater action={handleSave}loading={loading}/>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>

  </div>
  );
}
export default ReviewKyc;
