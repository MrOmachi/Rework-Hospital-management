interface ITabs {
  active: any;
  selectTab: any;
}

export default function ProfileTabs(props:ITabs) {

  return (
   <ul className="flex mt-10 mb-8 text-sm space-x-5 border-b w-[35%]   ">
        <li
        onClick={() => props.selectTab("profile")}
        className={`${props.active === "profile" ? `active:border-b-2`:null} cursor-pointer border-black pb-3 hover:border-b-2`}>
        Profile
        </li>
        <li
        onClick={() => props.selectTab("business")}
        className={`${props.active === "business" ? `active:border-b-2`:null} cursor-pointer border-black pb-3 hover:border-b-2`}>
        Business
        </li>
        <li
        onClick={() => props.selectTab("beneficiary")}
        className={`${props.active === "beneficiary" ? `active:border-b-2`:null} cursor-pointer border-black pb-3 hover:border-b-2`}>
        Beneficial Owners
        </li>

    </ul>)

  }