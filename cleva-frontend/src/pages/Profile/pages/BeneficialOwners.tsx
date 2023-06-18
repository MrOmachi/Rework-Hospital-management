export default function Beneficiary() {

  return (
 
    <section className="pt-12">
    <header className="flex justify-between items-center">
      <div className=" font-semibold">Beneficial owners</div>
      <button className=" bg-[#FFBD59] py-3 font-semibold px-2 text-black text-[14px] rounded-[8px] ">
        Add new beneficial owner
      </button>
    </header>

    <div className=" hover:bg-[#F6F6F6] border-2 border-slate-300 px-3 rounded-xl pb-2 flex text-[13px] mt-5 items-start justify-between">
      <div className=" grid grid-cols-2 px-3 w-[70%] ">
        <div className="pt-4 pb-3 leading-[2em]">
          <p>Legal First Name</p>
          <b className=" font-extrabold">Mary</b>
        </div>
        <div className="pt-4 pb-3 leading-[2em]">
          <p>Legal Last Name</p>
          <b className=" font-extrabold">Jane</b>
        </div>
        <div className="pt-4 pb-3 leading-[2em]">
          <p>DOB</p>
          <b className=" font-extrabold">12-12-1990</b>
        </div>
        <div className="pt-4 pb-3 leading-[2em]">
          <p>Address</p>
          <b className=" font-extrabold">Fairytale Street, UL, US 7225</b>
        </div>
      </div>
      <button
        className="border-2 
 font-semibold
 border-[#9a9a9a] 
 py-3 mt-5 px-6 
 text-[#787979]  
 rounded-[8px] "
      >
        Remove
      </button>
    </div>

    <div className=" hover:bg-[#F6F6F6] border-2 border-slate-300 px-3 rounded-xl pb-2 flex text-[13px] mt-3 items-start justify-between">
      <div className=" grid grid-cols-2 px-3 w-[70%] ">
        <div className="pt-4 pb-3 leading-[2em]">
          <p>Legal First Name</p>
          <b className=" font-extrabold">John</b>
        </div>
        <div className="pt-4 pb-3 leading-[2em]">
          <p>Legal Last Name</p>
          <b className=" font-extrabold">Doe</b>
        </div>
        <div className="pt-4 pb-3 leading-[2em]">
          <p>DOB</p>
          <b className=" font-extrabold">12-12-1990</b>
        </div>
        <div className="pt-4 pb-3 leading-[2em]">
          <p>Address</p>
          <b className=" font-extrabold">Fairytale Street, UL, US 7225</b>
        </div>
      </div>
      <button
        className="border-2 
 font-semibold
 border-[#9a9a9a] 
 py-3 mt-5 px-6 
 text-[#787979]  
 rounded-[8px] "
      >
        Remove
      </button>
    </div>
  </section>
  );
}
