import { DiCssTricks } from "react-icons/di";
import { AddOwner,Cancel } from "../../../components/buttons/Buttons";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setkycInfo,updateBeneficiaryOwner } from "../../../redux/Kyc/kycSlice";
interface IOwner{
  index: any;
  openForm: any;
}

function NonSoleOwner(props:IOwner) { 
  const { BusinessKyc } = useAppSelector((state) => state.kycInfo);
  const dispatch = useAppDispatch();
  const [owner , setOwner] = useState({
    FirstName:"",
    LastName:"",
    DateOfBirth:"",
    Address:{
      StreetAddress: "",
      SecondStreetAddress: "",
      City: "",
      Country:  "",
      StateOrTerritory:  "",
      LGA: "",
      Zipcode: ""
    }
});

const isButtonDisabled = 
owner?.FirstName === ""
|| owner?.LastName  === ""
|| !owner?.DateOfBirth;

const handleChange = (event:any) => {
  setOwner({
      ...owner,
     [event.target.name]: event.target.value
  })
};
  const handleAddressChange = (event:any) => {
    const Address:any = {
      ...owner.Address,
      [event.target.name]: event.target.value,
    };
    setOwner({
        ...owner,
        Address,
      })
  }

  const handleSubmit = () => {
    if(props.index){
      dispatch(updateBeneficiaryOwner({
        index:props.index,
        body: owner
      }))
    }else{
      let BeneficiaryOwners:any = [...BusinessKyc.BeneficiaryOwners,owner]; 
      dispatch(setkycInfo({
        ...BusinessKyc,
        BeneficiaryOwners,
      }));
    }
    props.openForm(false);
  };

  const handleCancel= ()=>{
    props.openForm(false);
  }

  useEffect(() => {
   if(props.index){
    let selectedOwner: any = BusinessKyc.BeneficiaryOwners[props.index];
    setOwner({...selectedOwner});
   }
  }, [props.index]);

return (
         <div>
          {/* Form 1 */}
          <div className="flex mt-1 md:mt-2">
            <p className="text-[13px] font-normal pb-1 ">Legal Name</p>
            <p className="text-[6.5px] text-[#D31D1D]">
              <DiCssTricks />
            </p>
          </div>
          <input
            type="text"
            name="FirstName"
            id=""
            value={owner.FirstName}
            onChange={handleChange}
            className={`text-[13px] border mb-2 w-full py-2 pl-2 outline-none rounded-[10px] ${
                owner.FirstName === "" ? "bg-white" : "bg-[#FFF5D9]"
            }`}
            placeholder="First Name"
          />

          {/* Form 2 */}
          <input
            type="text"
            name="LastName"
            id=""
            value={owner?.LastName}
            onChange={handleChange}
            className={`text-[13px] border mb-2 w-full py-2 pl-2 outline-none rounded-[10px] ${
                owner?.LastName === "" ? "bg-white" : "bg-[#FFF5D9]"
            }`}
            placeholder="Last Name"
          />
            <br/>
          <div className="flex ">
            <p className="text-[13px] font-normal pb-1 ">Date of birth</p>
            <p className="text-[6.5px] text-[#D31D1D]">
              <DiCssTricks />
            </p>
          </div>
          <input
            type="date"
            name="DateOfBirth"
            id=""
            value={owner?.DateOfBirth}
            onChange={handleChange}
            className={`text-[13px] border mb-2 w-full py-2 pl-2 outline-none rounded-[10px] ${
                owner?.DateOfBirth === "" ? "bg-white" : "bg-[#FFF5D9]"
            }`}
            placeholder="MM-DD-YYYY"
          />
          <br/>

               {/* Field 5 */}
          <div className="flex mt-2">
            <p className="text-[13px] md:text-[12px] pb-1 text-black font-normal ">
              Registered Business Address
            </p>
            <p className="text-[6.5px] text-[#D31D1D]">
              <DiCssTricks />
            </p>
          </div>
          <select
            name="Country"
            id=""
            value={owner?.Address?.Country}
            onChange={handleAddressChange}
            className={`text-[13px] text-[#747A80] border mb-1 w-full py-2 pl-2 outline-none rounded-[10px] ${
              owner?.Address?.Country ===""
                ? "bg-white"
                : "bg-[#FFF5D9] text-black"
            }`}
          >
            <option value="Business Address" className=" ">
              Select country
            </option>
            <option value="USA" className=" ">
              United State
            </option>
            <option value="Nigeria" className=" ">
              Nigeria
            </option>
            <option value="UK" className=" ">
              UK
            </option>
          </select>

          {/* Field 6 */}
          <input
            type="text"
            name="StreetAddress"
            id=""
            value={owner?.Address?.StreetAddress}
            onChange={handleAddressChange}
            className={`text-[13px] border mb-1 w-full py-2 pl-2 outline-none rounded-[10px] ${
              owner?.Address?.StreetAddress === "" ? "bg-white" : "bg-[#FFF5D9]"
            }`}
            placeholder="Address Line 1"
          />
          {/* Field 7 */}
          <input
            type="text"
            name="SecondStreetAddress"
            id=""
            value={owner?.Address?.SecondStreetAddress}
            onChange={handleAddressChange}
            className={`text-[13px] border mb-2 w-full py-2 pl-2 outline-none rounded-[10px] ${
              owner?.Address?.SecondStreetAddress === "" ? "bg-white" : "bg-[#FFF5D9]"
            }`}
            placeholder="Address Line 2"
          />
          {/* Field 8 */}
          <input
            type="text"
            name="City"
            id=""
            value={owner?.Address?.City}
            onChange={handleAddressChange}
            className={`text-[13px] border mb-1 w-full py-2 pl-2 outline-none rounded-[10px] ${
              owner?.Address?.City === "" ? "bg-white" : "bg-[#FFF5D9]"
            }`}
            placeholder="City"
          />
          {/* Field 9 */}
          <input
            type="text"
            name="StateOrTerritory"
            id=""
            value={owner?.Address?.StateOrTerritory}
            onChange={handleAddressChange}
            className={`text-[13px] border mb-1 w-full py-2 pl-2 outline-none rounded-[10px] ${
              owner?.Address?.StateOrTerritory === "" ? "bg-white" : "bg-[#FFF5D9]"
            }`}
            placeholder="State"
          />
          {/* Field 10 */}
          <input
            type="text"
            name="Zipcode"
            id=""
            value={owner?.Address?.Zipcode}
            onChange={handleAddressChange}
            className={`text-[13px] border mb-1 w-full py-2 pl-2 outline-none rounded-[10px] ${
              owner?.Address?.Zipcode === "" ? "bg-white" : "bg-[#FFF5D9]"
            }`}
            placeholder="Zip"
          />

          <br/>
          <br/>
          <div className="">
            <div className="mb-1">
              <AddOwner action={handleSubmit} index={props.index} isButtonDisabled={isButtonDisabled}/>
            </div>
            <div>
              <Cancel action={handleCancel}/>
            </div>
          </div>

          <br/>
          <br/>
          <br/>
          <br/>
        </div>
  );
}
export default NonSoleOwner;
