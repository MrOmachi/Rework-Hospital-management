import { useState } from "react";
import { SaveForLaterLong } from "../../../components/buttons/Buttons";
import axios from "axios";
import BeneficiaryUpload from "../components/uploadBeneficiaryDocument";
import { useAppSelector } from "../../../app/hooks";

export function UploadDocuments(){
  const { BusinessKyc, KycIdentifier } = useAppSelector((state) => state.kycInfo);
    const [loading,setLoader] = useState(false);
  

  const handleSubmit = (e: any) => {
    e.preventDefault();

    axios
      .put(
        `https://19ko4ew25i.execute-api.eu-west-1.amazonaws.com/qa/api/v1/kyc/${KycIdentifier}`,
        BusinessKyc
      )
      .then((response) => {
        // handleInterval();
      })
      .catch((error) => {
      });
  };

 
  return (
    <>

        <div className="md:w-[70%] h-[120vh] sm:w-[60%] ml-16">
          <div className="w-[60%]">
            <h3 className="font-semibold  text-[18px] py-5 ">
              Additional documents required
            </h3>
            <p className="text-[14px] text-[#747A80] mb-10 sm:mb-5 ">
              To complete your KYC verification, please submit a
              document for review.
            </p>

            <form className="mt-6 ">
              

              { BusinessKyc.BeneficiaryOwners.map(()=>{
              return(
                  <BeneficiaryUpload/>
                  )})
              }
                    
              <div className="w-full">
                <div className="font-extrabold mt-1">
                  {/* hidden button start */}
                  {loading ? (
                    <button
                      disabled
                      className="bg-[#FFF5D9] text-[15px] font-bold p-3 w-full rounded-lg mt-8  "
                    >
                      Uploading...
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        handleSubmit(e);
                      }}
                      className={`text-[15px] font-bold p-3 w-full rounded-lg mt-8 `}
                    >
                      Upload documents
                    </button>
                  )}
                </div>
                <div className="">
                  <SaveForLaterLong />
                </div>
              </div>


            </form>
          </div>
        </div>
    </>
  );
}

export default UploadDocuments;
