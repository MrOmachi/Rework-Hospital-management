import Input from '../../components/Layout/inputs/Input'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Layout/buttons/Button'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setUser } from '../../features/Accounts/AccountSlice';

export default function EditProfile() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.account.user);
const isDisabled = 
user?.FullName?.FirstName === "" 
|| user?.FullName?.LastName === ""
|| user?.BusinessName === ""
|| user?.StandardAttributes?.Email === ""
|| user?.StandardAttributes?.PhoneNumber === "";

  const handleChange = (event:any) => {
    const update:any ={
      ...user,
      [event.target.name]: event.target.value
    };
    dispatch(setUser(update));
  };


  const handleFullNameChange = (event:any) => {
    const update:any ={
      ...user,
      FullName:{
        [event.target.name]: event.target.value
      }
    };
    dispatch(setUser(update));
  };

  const handleStandardAttributesChange = (event:any) => {
    const update:any ={
      ...user,
      StandardAttributes:{
        [event.target.name]: event.target.value
      }
    };
    dispatch(setUser(update));
  };

  const handleSubmit = () => {
    navigate("/profile")
  }


  return (
    <div className='w-[50%]'>
      <header className='text-[16px] pt-6 pb-4'>
        Edit Personal Information
      </header>
      <form>
        <div className=' grid grid-cols-2 gap-4'>
         
        <Input
                title="First Name"
                text={''}
                type="text"
                fn={handleFullNameChange}
                err={``}
                value={user?.FullName?.FirstName}
                />

        <Input
                title="Last Name"
                text={''}
                type="text"
                fn={handleFullNameChange}
                err={``}
                value={user?.FullName?.LastName}
                />
        </div>
        <Input
                title="Email Address"
                text={''}
                type="email"
                fn={handleStandardAttributesChange}
                err={``}
                value={user?.StandardAttributes?.Email}
                />
        <Input
                title="Business Name"
                text={''}
                type="text"
                fn={handleChange}
                err={``}
                value={user?.BusinessName}
              />
        <Input
                title="Phone Number"
                text={''}
                type="tel"
                fn={handleStandardAttributesChange}
                err={``}
                value={user?.StandardAttributes?.PhoneNumber}
              />
        <Button
          status={!isDisabled ? true : false}
          fn={handleSubmit}
          text='Save'
          styles={`
          text-[11px]
          font-bold
          ${!isDisabled ? "bg-[#FFF5D9]" : "bg-[#FFBD59]"}
          w-28 p-3
          float-right
          rounded-md mt-4
        `} />
      </form>
    </div>
  )
}
