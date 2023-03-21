import React from 'react'
import marchantaccount from "../assets/marchantaccount.svg"
import { useForm, ValidationError } from '@formspree/react';


interface IFooter { }

const Footer = (props: IFooter) => {
  const [state, handleSubmit] = useForm("xwkjnlno");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className='bg-[#FFDCA7]'>
      <div className='flex justify-between items-center'>
        <div className="mx-auto mt-[45.39px]">
          <img src={marchantaccount} />
        </div>
      </div>
      <h1 className="text-[35.2289px] font-[600] leading-[43px] mb-[56.7px] text-center">Cleva banking is smart banking!</h1>
      {/* grid grid-cols-1 sm:grid-cols-2 sm:gap-[230px] justify-between items-center sm:px-[82.2px] px-[2rem] mt-[2rem] */}
      <div className=" bg-black rounded-lg grid grid-cols-1 sm:grid-cols-2 sm:gap-[3rem] justify-between items-center sm:p-[94.92px] mt-[2rem] px-[2rem] sm:mx-[5rem]">
        <div className="text-white">
          <h2 className="text-[27.4003px] font-bold mb-[25.71px] text-[#FF9E0B] mt-[2rem]">Sign up</h2>
          <span className="bg-[#FF9E0B] text-[#000000] py-[9.97px] px-[11.74px] leading-[29px] text-[20px] sm:text-[23.486px] font-[500] rounded-r-[24.4645px]">
            Take control of you own finances
          </span>
          <div className="text-[#FFFFFF] leading-[24px] mt-[30.34px] sm:pr-[8rem]">
            <span>Fill out this form and we will contact you shortly.</span><br />
            <span>We’ll only use your information to contact you about Cleva and nothing else.</span>
          </div>
          <div className="sm:mt-[292.5px] mt-[2rem]">
            <p className='font-[500]'>Contact us</p>
            <p>contact@getcleva.com</p>
          </div>
        </div>
        <div className="px-[31.31px] rounded-lg  bg-[#FF9E0B] sm:w-[497.12px] my-[2rem]">
          <form className="py-[51.86px]" onSubmit={handleSubmit}>
            <div className="mb-4 flex justify-between">
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-[#606060] leading-tight focus:outline-none focus:shadow-outline mr-[23.49px] placeholder:text-[15.6573px]" type="text" placeholder="First Name" name="firstName" />
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-[#606060] leading-tight focus:outline-none focus:shadow-outline placeholder:text-[15.6573px]" type="text" placeholder="Last Name" name="lastName" />
            </div>

            <div className="mb-4">
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-[#606060] leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Company Name" name="companyName" />
            </div>

            <div className="mb-4">
              <select className="w-[100%] py-2 px-3 text-[#606060]">
                <option>Company Type</option>
              </select>
            </div>

            <div className="mb-4">
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-[#606060] leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Work Email" name="workEmail" />
            </div>

            <div className="mb-4">
              <select className="w-[100%] py-2 px-3 text-[#606060]">
                <option>Select Country</option>
              </select>
            </div>

            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 justify-between items-center sm:gap-[1rem]">
              <div className='mb-[1rem] sm:mb-[0rem]'>
                <select className="w-[100%] py-2 px-3 text-[#606060]">
                  <option>Country Code</option>
                </select>
              </div>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-[#606060] leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Phone Number" name="phoneNumber"/>
            </div>

            <div className="mb-4">
              <select className="w-[100%] py-2 px-3 text-[#606060]">
                <option>Product of interest</option>
              </select>
            </div>

            <div className="mb-4">
              <select className="w-[100%] py-2 px-3 text-[#606060]">
                <option>How did you hear about us?</option>
              </select>
            </div>

            <div className="mb-4">
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows={4} placeholder="Anything else to add?"></textarea>
            </div>
            <button className="bg-[#000000] text-white py-2 px-4 hover:bg-[#000000] focus:outline-none focus:shadow-outline w-[100%] rounded-[3.91433px]" type="button">
              Join Cleva
            </button>
          </form>
        </div>
      </div>

      <div className="sm:pr-[17rem] px-[1rem] sm:pl-[0rem] pb-[1rem] text-center sm:text-left sm:mx-[5rem] text-[#000000] text-[16px] font-[200] leading-[20px] mt-[62.68px]">
        <h1 className="mb-[10px]">(c) 2023 Cleva Technologies, Inc.  </h1>
        <h1>Cleva, a company incorporated under the laws of Delaware, the United States of America, is a financial technology company and not a bank.
          All banking services are provided by our licensed banking partners.</h1>
      </div>
    </div>


  )
}

export default Footer