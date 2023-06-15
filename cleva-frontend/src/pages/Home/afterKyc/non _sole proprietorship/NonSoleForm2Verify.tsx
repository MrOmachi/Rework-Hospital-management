import { AddAnotherBeneficiary2, Continue2 } from "../../../buttons/Buttons";
import { checkSymbol, closeIcon, line, pencil } from "../../../../Image";
import { useState } from "react";
import axios from "axios";
import Button from "../../../../components/Layout/buttons/Button";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../../app/hooks";

function NonSoleForm2Verify() {
  const [close, setClose] = useState(false);

  const navigate = useNavigate();
  // const { kycInfoNonSole } = useAppSelector((state) => state.kycInfo);

  // btn styling starts
  const btnAddNewBeneficiary =
    "w-full text-[15px] font-semibold p-3 rounded-lg mt-5 border-[#747A80] border bg-[#FAFAFA]";
  const btnContinue =
    "bg-[#FFBD59] text-[15px] font-semibold p-3 w-full rounded-lg mt-3";

  // btn styling ends here

  const handleAddAnotherBeneficiary = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate("/nonSoleForm2Beneficiary");
  };
  const handleContinue = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate("/nonSoleRev_Submit");
  };
  const kycInfoNonSole = JSON.parse(
    localStorage.getItem("kycInfoNonSole") as string
  );

  return (
    <div className="flex justify-evenly w-full mt-14">
      <div className="w-[25%] md:w-[25%] sm:w-[35%]">
        <div className="flex">
          <div className="items-center">
            <div className="border border-[#FFBD59]  rounded-full w-[16px]  h-[16px] flex items-center  text-[8px] justify-center ">
              <img className="w-[7px]" src={checkSymbol} alt="" />
            </div>
            <img className="h-[25px] m-auto" src={line} alt="" />
          </div>
          <p className="text-[11px]  ml-2 font-medium">Business Information</p>
        </div>

        <div className="flex">
          <div>
            <p className="bg-[#FFBD59] rounded-full w-[16px]  h-[16px] items-center text-[#747A80] text-[8px] justify-center flex">
              2
            </p>
            <div className="h-[25px] m-auto border w-[1px]"></div>
          </div>
          <div className="flex text-[11px] font-medium   ml-2">
            Beneficiary Owners
          </div>
        </div>

        <div className="flex">
          <div>
            <p className="border-[1px] rounded-full w-[16px]  h-[16px] items-center justify-center text-[#747A80] flex text-[8px]">
              3
            </p>
          </div>
          <div className="text-[#747A80] text-[11px]  ml-2">
            Review & Submit
          </div>
        </div>
      </div>

      <form
        action=""
        // onClick={handleSubmit}
        className="w-[75%] sm:w-[60%] md:w-[75%] h-[90vh]"
      >
        <div className="w-[60%] px-3 pb-2 ">
          <div>
            <h3 className="font-semibold text-[20px] pb-4 ">
              Beneficial Owners
            </h3>
            <p className=" text-[#747A80] text-[15px]">
              Due to regulatory guidelines, we’re required to collect
              information on anyone who has significant ownership of your
              business
            </p>
            <p className="text-[15px] py-7 text-[#747A80] font-semibold">
              Please add any individual who owns 25% or more of Tolus <br />
              Enterprises
            </p>
          </div>

          <div className="relative ">
            {close ? null : (
              <div className=" md:w-full sm:w-[90%] ">
                <b className="text-[15px] font-semibold ">Business Details</b>
                {kycInfoNonSole.map((kycInfoNonSole: any) => {
                  return (
                    <div className="flex justify-between rounded-[13px] border p-3 mt-1 text-[12px] font-semibold bg-[#FFFCF1]">
                      <div>
                        <p className=" flex mb-2 text-[13px] space-x-1">
                          <span>{kycInfoNonSole.firstName}</span>
                          <span>{kycInfoNonSole.lastName}</span>
                        </p>
                        <p className=" pb-2 text-[13px] text-[#747A80]">
                          {kycInfoNonSole.email}
                        </p>
                      </div>
                      <img
                        className="w-[15px] absolute sm:ml-56 md:ml-[80%] cursor-pointer"
                        src={pencil}
                        alt=""
                      />
                      {/* <div onClick={()=> setClose(true)}> */}
                      <img
                        className="w-[15px] absolute sm:ml-56 md:ml-[90%] cursor-pointer"
                        src={closeIcon}
                        alt=""
                        onClick={() => setClose(true)}
                      />
                      {/* </div> */}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="mt-8">
            <div>
              <Button
                styles={`${btnAddNewBeneficiary}`}
                text="Add Another Beneficiary"
                fn={handleAddAnotherBeneficiary}
                status={false}
              />
              <Button
                styles={`${btnContinue}`}
                text="Continue"
                fn={handleContinue}
                status={false}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NonSoleForm2Verify;
