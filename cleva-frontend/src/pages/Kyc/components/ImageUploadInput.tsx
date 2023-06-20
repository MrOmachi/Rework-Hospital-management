import { useState } from "react";
import { downloadIcon } from "../../../Image";
import { ImFileText2, ImNotification } from "react-icons/im";
import { HiOutlineX } from "react-icons/hi";
import { useAppDispatch } from "../../../app/hooks";
import { updateBeneficiaryOwner, updateBusinessDocument } from "../../../features/Kyc/kycSlice";

interface IUploadInput{
    document?: {
        filename?: string;
        contentType?: string;
        size?: number;
        data?: string | null;
        status?: string;
        message?: string;
      };
    show: boolean;
    index: any;
    name:string;
}

const DocumentUpdate = (name:any, document:any,index:any) => {
    switch (name) {
      case "BeneficialOwners":
        return updateBeneficiaryOwner(
            {
                index:index,
                body: {Document: document}
            }
        )
      default:  
        return updateBusinessDocument(
            {
                index:index,
                body: document
            }
        )
    }
   };

export function ImageUploadInput(props:IUploadInput) {
    const [document, setDocument] = useState(props.document || null);
    const dispatch = useAppDispatch();

    const handleRemoveDocument = (e:any) => {
        setDocument(null);
        dispatch(DocumentUpdate(props.name, undefined, props.index));
    }
    const handleFileInputChange = (event:any) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
              const result: string | ArrayBuffer | null = reader.result;
              if (typeof result === 'string') {
                const data = {
                  filename: file.name,
                  contentType: file.type,
                  size: file.size,
                  data: result,
                };
                setDocument(data);
                dispatch(DocumentUpdate(props.name, data, props.index));
              }
            };
            reader.readAsDataURL(file);
            console.log("document:", document);
          }
      };

    return (
        <>
{props.show &&
<>
<div className="mt-1 items-center">
          {(!document?.data) && (
            <label
              htmlFor="license1"
              className="text-sm py-8 border-[2.5px] border-dotted  border-[#747A80] bg-[#F9FAFA] rounded-[13px] flex pl-5 cursor-pointer"
            >
              <div>
                <img
                  className="w-[30px] md:mt-1 "
                  src={downloadIcon}
                  alt=""
                />
              </div>
              <div className="ml-2">
                <input
                  type="file"
                  name="identity_Doc"
                  id="license1"
                  hidden
                  accept="image/x-png,image/jpeg,application/pdf"
                  onChange={handleFileInputChange}
                  placeholder=" types: JPEG, PNG, PDF. Max file size 2mb"
                />
                <div className="  text-[12px]">
                  <div className="flex -mt-2 mb-2">
                    <p className="text-[11px] font-bold">
                      Drag and drop documents here or
                    </p>
                    <span className="ml-2 text-[#FFBD59] text-[11px] font-bold">
                      Browse
                    </span>
                  </div>
                  <p className="text-[11px] text-[#747A80] font-medium">
                    Supported file types: JPEG, PNG, PDF. Max file size
                    2mb
                  </p>
                </div>
              </div>
            </label>
          )}

          {document?.data && (
            <>
            <label className={`${
              document.status===("CORRUPT" || "FAILED") ?
             "border-[#D31D1D]": "border-[#747A80] bg-[#E8F4FF]"
            } text-sm  border-[2.5px] border-dotted rounded-[13px] flex m-auto justify-between py-5`}>
              <div className=" w-[90%]">
                <div className="flex w-[85%] m-auto">
                  <p className="text-[25px] mt-1">
                    {document.status===("CORRUPT" || "FAILED") ?
                    <ImNotification color="#D31D1D" />:<ImFileText2 />
                    }
                  </p>
                  <div className="  text-[12px]">
                    <div>
                    {document.status === ("CORRUPT" || "FAILED") && <b className={`text-[12px] font-bold`}>
                        Upload failed
                      </b>}
                      <p className="text-[13px] font-semibold ml-5 ">
                        {document.filename}
                      </p>
                      {document?.status!==("CORRUPT" || "FAILED") && <p className={`text-[13px] text-[#747A80] font-semibold ml-5 pt-2`}>
                        {document.size }
                      </p>}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-[10%]  ml-11 cursor-pointer"
                onClick={(e)=> handleRemoveDocument(e)}>
                <p className="text-[22px] text-[#747A80]">
                  <HiOutlineX />
                </p>
              </div>
            </label>
            {document?.message && <p className="mt-3 text-[13px] text-[#D31D1D]">{document?.message}</p>}
            </>
          )}
        </div>
</>
}
        </>
    )
}