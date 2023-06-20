import { useNavigate } from "react-router-dom";

interface IProfile {
    user: any;
  }
export default function Profile(props:IProfile) {
  const navigate = useNavigate();
  return (
        <>
         <section>
          <div className="pt-[1em] flex items-center gap-6">
            <span className=" rounded-full h-[100px] bg-[#F2F2F2] text-[40px] border-[3px] border-[#cccccc] w-[100px] text-center pt-4">
              <b>
              {props.user?.FullName?.FirstName[0]}
              {props.user?.FullName?.LastName[0]}
              </b>
            </span>
          </div>
        </section>

        <br/>

      <section className="border border-[#aaa9a9] mt-5 px-12 py-8 text-[14px] rounded-xl ">
        <div>
          <header className="text-[#787979]">Personal Information</header>
          <div className="flex items-start justify-between">
            <div className=" grid grid-cols-2 w-[70%] ">
                  <div className="pt-6">
                    <p>First Name</p>
                    <b>{props.user?.FullName?.FirstName}</b>
                  </div>

                  <div className="pt-6">
                    <p>Last Name</p>
                    <b>{props.user?.FullName?.LastName}</b>
                  </div>

                  <div className="pt-6">
                    <p>Email Address</p>
                    <b>{props.user?.StandardAttributes?.Email}</b>
                  </div>


                  <div className="pt-6">
                    <p>Phone Number</p>
                    <b>{props.user?.StandardAttributes?.PhoneNumber}</b>
                  </div>


                  <div className="pt-6">
                    <p>Country of Residence</p>
                    <b>
                        {props.user?.StandardAttributes?.Address?.Country}
                    </b>
                  </div>
            </div>

            <button
              onClick={() => navigate("/profile/edit")}
              className="border-2 border-[#9a9a9a] py-3 px-8 text-[#787979]  rounded-[8px] ">
              Edit
            </button>
          </div>
        </div>

      </section>
      </>
  );
}
