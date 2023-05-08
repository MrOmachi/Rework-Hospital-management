import React, { useState } from "react";
import { AiOutlineBell, AiOutlineSearch } from "react-icons/ai";
import Profile_pop from "../PopUps/Profile_pop";
import user_img from '../../asset/kyc/user.jpg'

export default function Nav() {

  const [modal, setModal] = useState(false)


  return (
    <div className=" m-auto">
      <section className="flex items-center justify-between">
        <div>
          <b className=" font-extrabold ">Home</b>
        </div>
        <div className="flex items-center w-[40%] justify-evenly">
          <span className="border-2 flex items-center gap-1 p-2 rounded-md w-[70%] text-[18px] ">
            <AiOutlineSearch />
            <input
              className="text-[12px] outline-none "
              type="text"
              placeholder="Type to search ..."
            />
          </span>
          <span className="border-2 p-[9px]  rounded-md ">
            <AiOutlineBell />
          </span>

          <span onClick={() => setModal(true) } className="rounded-full overflow-hidden w-10 h-10 bg-[#F2F2F2] border-2">
            <img src={user_img} className='w-full h-[100%] object-cover' />
          </span>

          {/* <span className="rounded-full w-10 h-10 bg-[#F2F2F2] border-2 py-[6px] px-2">
            <b>TA</b>
          </span> */}

        </div>
      </section>
      {
        modal && <Profile_pop />
      }
    </div>
  );
}
