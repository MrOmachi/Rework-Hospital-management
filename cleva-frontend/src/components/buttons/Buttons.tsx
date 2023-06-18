import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineAdd } from "react-icons/md";

interface IButton{
  action?: any;
  isButtonDisabled?: any;
  size?: any;
  index?: number;
  loading?: boolean;
}

export const AgreeAndSubmit = (props:IButton) => {
  return (
    <div>
      <button
      type="button"
      disabled={props.loading} 
      onClick={()=>props.action()}
       className="bg-[#FFBD59] w-full lg:text-[15px] sm:text-[13px] font-semibold p-2 rounded-lg mt-7  ">
        {!props.loading ? "Agree and Submit":'please wait...'}
      </button>
    </div>
  );
};

export const UploadDocument = (props:IButton)=>{
  return (
      <div className="font-extrabold mt-1">
      <button 
        type="button"
        disabled={props.loading || props.isButtonDisabled}
        onClick={()=>props.action()}
        className={(props.loading || props.isButtonDisabled ?
         "bg-[#FFF5D9] text-[#5F5D5D]": "bg-[#FFBD59]") +
         ` text-[15px] font-bold p-3 w-full rounded-lg mt-8 `}>
        {props.loading ? "Uploading...":"Upload documents"}
      </button>
    </div>
    )
  }


export const AddBeneficiaryOwner = (props:IButton) => {
  return (
    <div className="flex relative">
      <button
        type="button"
        onClick={()=>props.action()}
        className="w-full text-[15px] font-semibold p-3 rounded-lg mt-2 border-[#747A80] border bg-[#FAFAFA]">
        {props.size > 0 ? "Add another beneficial owner":"Add beneficial owner"}
      </button>
      <p className="absolute pl-8 w-[29px] mt-[22px] font-extrabold text-[19px]">
        <MdOutlineAdd />
      </p>
    </div>
  );
};

export const AddOwner = (props:IButton) => {
  return (
    <div className=" relative font-extrabold text-[15px]">
      <button
        type="button"
        onClick={()=>props.action()}
        className="w-full text-[15px] font-semibold p-3 rounded-lg mt-2 border bg-[#FFBD59]">
        {props?.index !==undefined ? "Save beneficial owner":"Add beneficial owner"}
       </button>
    </div>
  );
};


export const Continue = (props:IButton) => {
  return (
      <div className="flex relative">
          <button
          type="button"
          disabled={props.isButtonDisabled}
          onClick={()=> props.action() }
          className={`text-[13px] w-full border py-2 px-4 pl-6 rounded-lg mt-2 font-medium ${
              props.isButtonDisabled ?
             "bg-[#FFF5D9] text-[#5F5D5D]": "bg-[#FFBD59]"
            }`}>
          Continue &nbsp;&nbsp;&nbsp;
        </button>
        <p className="absolute pr-4 w-[32px] mt-[18px] font-extrabold text-[20px]"
          style={{ right: 0 }}>
         <MdKeyboardArrowRight />
        </p>
      </div>
  );
};



export const ContinueLong = (props:IButton) => {
  return (
      <div className="flex relative">
          <button
          type="button"
          disabled={props.isButtonDisabled}
          onClick={()=> props.action() }
         className={`w-full text-[15px] font-semibold p-3 rounded-lg mt-2 border ${
              props.isButtonDisabled ?
             "bg-[#FFF5D9] text-[#5F5D5D]": "bg-[#FFBD59]"
            }`}>
          Continue
        </button>
      </div>
  );
};

export const Cancel = (props:IButton) => {
  return (
    <div className="font-extrabold mt-2">
      <button
        type="button"
        disabled={props.isButtonDisabled}
        onClick={()=> props.action() }
        className=" text-[13px] font-semibold p-2 w-full border-[#747A80] rounded-lg border-2"
      >
        Cancel
      </button>
    </div>
  );
};

export const SaveAndContinue = (props:IButton) => {
  return (
    <div className="flex relative"> 
      <button
          type="button"
          disabled={props.isButtonDisabled}
          onClick={()=> props.action() }
          className={`relative text-[13px] border-[1px] font-bold  py-3 px-6 rounded-[10px] mt-2 font-medium border-2 ${
            props.isButtonDisabled ? 
            "bg-[#FFF5D9] text-[#5F5D5D]"
              :"bg-[#FFBD59]"
          }`}>
          Save & Continue  &nbsp;&nbsp;
     </button> 
        <p className="absolute pr-4 w-[32px] mt-[21px] font-extrabold text-[20px]"
          style={{ right: 0 }}>
         <MdKeyboardArrowRight />
        </p>
      </div>
  );
};

export const SaveForLater = (props:IButton) => {
  return (
    <div>
      <button
        type="button"
        disabled={props.isButtonDisabled}
        onClick={()=> props.action() }
        className="border-[1px] border-[#747A80] lg:text-[15px]  sm:text-[13px] font-semibold p-2 w-full rounded-lg mt-2 bg-[#F2F2F2] ">
        Save for later
      </button>
    </div>
  );
};

export const SaveForLaterLong = (props:IButton) => {
  return (
    <div>
      <button
        type="button"
        disabled={props.isButtonDisabled}
        onClick={()=> props.action() }
        className="border-[1px] border-[#ADADADB2] text-[15px] font-bold p-3 w-full rounded-lg mt-2 mb-20 bg-[#FAFAFA]">
        Save for later
      </button>
    </div>
  );
};

export const Previous = (props:IButton) => {
  return (
    <div className="flex relative">
      <button 
        type="button"
        disabled={props.isButtonDisabled}
        onClick={()=> props.action() }
        className=" text-[13px] border-[1px] border-gray-600 py-2 px-4 pl-6 rounded-lg mt-2 font-medium">
        Previous
      </button>
      <p className="absolute pl-2 w-[32px] mt-[17px] font-extrabold text-[20px]">
        <MdKeyboardArrowLeft />
      </p>
    </div>
  );
};
