import { useNavigate } from "react-router-dom";

interface IBusiness {
  kyc: any;
}

export default function Business(props:IBusiness) {
  const navigate = useNavigate();
  return (
    <section className="border border-[#aaa9a9] mt-3 px-12 py-6 text-[14px] rounded-xl">
        <header className="text-[#787979]">Business Information</header>
        <div className="flex items-start justify-between">
          <div className=" grid grid-cols-2 w-[70%] ">
                <div className="pt-4 leading-[2em]">
                  <p>Business Name</p>
                  <b>{props?.kyc?.BusinessName}</b>
                </div>
                <div className="pt-4 leading-[2em]">
                  <p>Business Type</p>
                  <b>{props?.kyc?.Type}</b>
                </div>
                <div className="pt-4 leading-[2em]">
                  <p>EIN</p>
                  <b>{props?.kyc?.BusinessRegistrationNumber}</b>
                </div>
                <div className="pt-4 leading-[2em]">
                  <p>Business Address</p>
                  <b>
                    {props?.kyc?.RegisteredAddress?.StreetAddress}, &nbsp;
                    {props?.kyc?.RegisteredAddress?.StateOrTerritory}, &nbsp;
                    {props?.kyc?.RegisteredAddress?.City}, &nbsp;
                    {props?.kyc?.RegisteredAddress?.Country} &nbsp;
                    {props?.kyc?.RegisteredAddress?.Zipcode}
                  </b>
                </div>
                <div className="pt-4 leading-[2em]">
                  <p>Website</p>
                  <b>{props?.kyc?.Website}</b>
                </div>
                <div className="pt-4 leading-[2em]">
                  <p>Classification</p>
                  <b>{props?.kyc?.Classification}</b>
                </div>
                
          </div>
          <button onClick={() => navigate("/kyc")} className="border-2 border-[#9a9a9a] py-3 px-8 text-[#787979]  rounded-[8px] ">
            Edit
          </button>
        </div>
      </section>
  );
}
