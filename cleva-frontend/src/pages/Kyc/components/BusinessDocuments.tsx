import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { updateBusinessDocument } from "../../../redux/Kyc/kycSlice";
import { ImageUploadInput } from "./ImageUploadInput";

interface IOwner{
    index: any;
    loading?: any;
}

export function BusinessDocument(props:IOwner) {
    const { BusinessKyc } = useAppSelector((state) => state.kycInfo);
    const dispatch = useAppDispatch();
    const [document , setDocument] = useState(BusinessKyc.BusinessDocuments[props.index]);
  

  const handleBusinessDocument = (event:any) => {
    setDocument({
        ...document,
        [event.target.name]: event.target.value
    })
  if(props.index){
    dispatch(updateBusinessDocument({
      index:props.index,
      body: document
    }))
  }
  };

return(
    <>
      <div className="mb-8">

      <br/>
      <div>
          <select
            name="DocumentType"
            id=""
            value={document?.DocumentType}
            onChange={handleBusinessDocument}
            className="w-full text-[13px] rounded-lg outline-none ">
            <option value="" className="hidden">
              Means of Identification
            </option>
            <option value="IRS-issued EIN Confirmation Letter (Form CP 575)">
            IRS-issued EIN Confirmation Letter (Form CP 575)
            </option>
            <option value="Filed and Stamped Articles of Incorporation">
            Filed and Stamped Articles of Incorporation
            </option>
            <option value="Certificate of Good Standing">
            Certificate of Good Standing
            </option>
          </select>
        </div>
       {document?.DocumentType && 
       <p className="mt-6  text-[15px] font-medium ">
          Copy of {document?.DocumentType}
        </p>}
        <ImageUploadInput 
            index={props.index}
            name="BusinessDocuments"
            show={document?.DocumentType ? true:false} 
            document={document}/>
        </div>

    </>
)
}
