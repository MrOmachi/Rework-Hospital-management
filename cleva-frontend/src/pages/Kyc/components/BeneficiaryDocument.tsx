import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { updateBeneficiaryOwner } from "../../../redux/Kyc/kycSlice";
import { ImageUploadInput } from "./ImageUploadInput";

interface IOwner{
    key: any;
    index?: any;
}

export function BeneficiaryDocument(props:IOwner) {
    const { BusinessKyc } = useAppSelector((state) => state.kycInfo);
    const dispatch = useAppDispatch();
    const [owner , setOwner] = useState(BusinessKyc.BeneficiaryOwners[props.index]);

  const handleDocumentType = (event:any) => {
    const IdentificationDocument: any ={
        [event.target.name]:event.target.value
      };
      const update: any = {
        ...owner,
        IdentificationDocument:IdentificationDocument
      }
    if(props.index !== null){
      dispatch(updateBeneficiaryOwner({
        index:props.index,
        body: update
      }))
      setOwner(update);
    }
  };

//   useEffect(()=>{
//   return setOwner();
// },[BusinessKyc.BeneficiaryOwners, props.index])


return(
    <>
      <p className="flex space-x-1 text-[#A86601] py-3 text-[14px] font-semibold">
        <span>
          {owner?.FirstName}
        </span>
        <span>
          {owner?.LastName}
        </span>
      </p>


      <div className="mb-8">
      <div>
          <label
            htmlFor=""
            className="text-[15px] text-[#333232] font-medium"
          >
            Means of Identification
          </label>
          <br/>
          <select
            name="DocumentType"
            id=""
            value={owner.IdentificationDocument?.DocumentType}
            onChange={handleDocumentType}
            className="w-full text-[13px] rounded-lg outline-none mt-3">
            <option value="" className="hidden">
              Means of Identification
            </option>
            <option value="US-issued Driver’s License">
              US-issued Driver’s License
            </option>
            <option value="US-issued State ID">
              US-issued State ID
            </option>
            <option value="International Passport">
              International Passport
            </option>
          </select>
        </div>
       {owner.IdentificationDocument?.DocumentType && 
       <p className="mt-6  text-[15px] font-medium ">
          Copy of {owner?.FirstName}’s {owner.IdentificationDocument?.DocumentType}
        </p>}
        <ImageUploadInput 
          index={props.index}
          name="BeneficiaryOwners"
          show={owner.IdentificationDocument?.DocumentType ? true:false} 
          document={owner?.Document}/>
        </div>

    </>
)

}