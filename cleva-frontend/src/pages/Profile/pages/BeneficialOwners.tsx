
interface IBeneficiary {
  owners: any;
}

export default function Beneficiary(props:IBeneficiary) {
  return (
    <section className="pt-1">
    <header className="flex justify-between items-center">
      <div className=" font-semibold">Beneficial owners</div>
      <button className=" bg-[#FFBD59] py-3 font-semibold px-2 text-black text-[14px] rounded-[8px] ">
        Add new beneficial owner
      </button>
    </header>

   {props.owners.map((owner:any, i:any) => {
              return (
    <div key={i} className=" hover:bg-[#F6F6F6] border-2 border-slate-300 px-3 rounded-xl pb-2 flex text-[13px] mt-5 items-start justify-between">
      <div className=" grid grid-cols-2 px-3 w-[70%] ">
        <div className="pt-4 pb-3 leading-[2em]">
          <p>Legal First Name</p>
          <b className=" font-extrabold">{owner.FirstName}</b>
        </div>
        <div className="pt-4 pb-3 leading-[2em]">
          <p>Legal Last Name</p>
          <b className=" font-extrabold">{owner.LastName}</b>
        </div>
        <div className="pt-4 pb-3 leading-[2em]">
          <p>DOB</p>
          <b className=" font-extrabold">{owner.DateOfBirth}</b>
        </div>
        {owner.Address?.StreetAddress && 
        <div className="pt-4 pb-3 leading-[2em]">
          <p>Address</p>
          <b className=" font-extrabold">
                    {owner.Address?.StreetAddress}, &nbsp;
                    {owner.Address?.StateOrTerritory}, &nbsp;
                    {owner.Address?.City}, &nbsp;
                    {owner.Address?.Country} &nbsp;
                    {owner.Address?.Zipcode}
          </b>
        </div>}
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
    </div>)})
    }

  </section>
  );
}
