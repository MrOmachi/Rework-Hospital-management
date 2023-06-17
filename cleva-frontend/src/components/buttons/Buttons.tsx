import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Spinner from "../PopUps/Spinner";
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

export const Upload = (props:IButton)=>{
  return (
      <div className="font-extrabold mt-1">
      <button 
        type="button"
        disabled={props.loading}
        onClick={()=>props.action()}
        className={(props.loading ? null:`bg-[#FFF5D9] `) +` text-[15px] font-bold p-3 w-full rounded-lg mt-8 `}>
        {props.loading ? "Uploading...":"Upload documents"}
      </button>
    </div>
    )
  }


export const AddBeneficiaryOwner = (props:IButton) => {
  return (
    <div className=" relative font-extrabold text-[15px]">
      <button
        type="button"
        onClick={()=>props.action()}
        className="w-full text-[15px] font-semibold p-3 rounded-lg mt-2 border-[#747A80] border bg-[#FAFAFA]">
        {props.size > 0 ? "Add another beneficial owner":"Add beneficial owner"}
      </button>
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
      {!props.index ? "Add beneficial owner":"Save beneficial owner"}
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
    <div className="flex float-right"> 
      <button
          type="button"
          disabled={props.isButtonDisabled}
          onClick={()=> props.action() }
          className={`relative text-[13px] border-[1px] font-bold  py-3 px-6 rounded-[10px] mt-2 font-medium border-2 ${
            props.isButtonDisabled ? 
            "bg-[#FFF5D9] text-[#5F5D5D]"
              :"bg-[#FFBD59]"
          }`}>
          Save & Continue
     </button> 
      </div>
  );
};

export const SaveForLater = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div>
      <button
        onClick={handleSubmit}
        className="border-[1px] border-[#747A80] lg:text-[15px]  sm:text-[13px] font-semibold p-2 w-full rounded-lg mt-2 bg-[#F2F2F2] "
      >
        Save for later
      </button>
    </div>
  );
};

export const SaveForLaterLong = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div>
      <button
        onClick={handleSubmit}
        className="border-[1px] border-[#ADADADB2] text-[15px] font-bold p-3 w-full rounded-lg mt-2 mb-20 bg-[#FAFAFA]"
      >
        Save for later
      </button>
    </div>
  );
};

export const Previous = () => {
  return (
    <div className="flex relative">
      <button className=" text-[13px] border-[1px] border-gray-600 py-2 px-4 pl-6 rounded-lg mt-2 font-medium">
        Previous
      </button>
      <p className="absolute pl-2 w-[32px] mt-[17px] font-extrabold text-[20px]  ">
        <MdKeyboardArrowLeft />
      </p>
    </div>
  );
};
