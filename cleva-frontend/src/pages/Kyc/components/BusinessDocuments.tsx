import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { updateBusinessDocument } from "../../../features/Kyc/kycSlice";
import { ImageUploadInput } from "./ImageUploadInput";

interface IDoc{
    key: any;
    index?: any;
}

export function BusinessDocument(props:IDoc) {
    const { BusinessKyc } = useAppSelector((state) => state.kycInfo);
    const dispatch = useAppDispatch();
    const [document , setDocument] = useState(BusinessKyc.BusinessDocuments[props.index]);
  
    const handleBusinessDocument = (event:any) => {  
        const update : any ={
            ...document,
            [event.target.name]: event.target.value
        }
        if(props.index !== null){
            dispatch(updateBusinessDocument({
            index:props.index,
            body: update
            }))
            setDocument(update);
        }
    };

return(
    <>
      <div className="mb-8">

      <br/>
      <div>
          <select
            name="DocumentType"
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
