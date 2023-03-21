import React from 'react'
import marchantaccount from "../assets/marchantaccount.svg"
import { useForm, ValidationError } from '@formspree/react';


interface IFooter { }

const Footer = (props: IFooter) => {
  const [state, handleSubmit] = useForm("xwkjnlno");
  if (state.succeeded) {
    return <>Thanks for joining!</>;
  }

  const screenWidth = window.innerWidth;

  return (
    <div className='bg-[#FFDCA7]'>
      <div className='flex items-center justify-between'>
        <div className="mx-auto mt-[45.39px]">
          <img src={marchantaccount} className="h-[4rem] sm:h-[101px]" />
        </div>
      </div>
      {/* font-size: 20.2289px; */}
      <h1 className="sm:text-[35.2289px] font-[600] leading-[43px] sm:mb-[56.7px] text-center">Cleva banking is smart banking!</h1>
      {/* grid grid-cols-1 sm:grid-cols-2 sm:gap-[230px] justify-between items-center sm:px-[82.2px] px-[2rem] mt-[2rem] */}
      <div className=" bg-black rounded-lg grid grid-cols-1 sm:grid-cols-2 sm:gap-[3rem] justify-between items-center sm:p-[94.92px] mt-[2rem] px-[2rem] sm:mx-[5rem]">
        <div className="text-white">
          <h2 className="text-[27.4003px] font-bold mb-[25.71px] text-[#FF9E0B] mt-[2rem]">Sign up</h2>
          <span className="bg-[#FF9E0B] text-[#000000] py-[9.97px] px-[11.74px] leading-[29px] sm:text-[23.486px] font-[500] rounded-r-[24.4645px]">
            Take control of your finances
          </span>
          <div className="text-[#FFFFFF] leading-[24px] mt-[30.34px] sm:pr-[6rem]">
            <span>Fill out this form and we will contact you shortly. </span>
            <span> We’ll only use your information to contact you about Cleva and nothing else.</span>
          </div>
          {screenWidth > 640 ? (<div className="sm:mt-[292.5px] mt-[2rem]">
            <p className='font-[500]'>Contact us</p>
            <p>contact@getcleva.com</p>
          </div>) : null}

        </div>
        {/* .px-\[31\.31px\] {
    padding-left: 21.31px;
    padding-right: 21.31px;
} */}
        <div className="px-[21.31px] sm:px-[32.31px] rounded-lg  bg-[#FF9E0B] sm:w-[497.12px] my-[2rem]">
          <form className="pt-[24.86px] pb-[24.86px]" onSubmit={handleSubmit}>
            <div className="flex justify-between mb-4">
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-[#606060] leading-tight focus:outline-none focus:shadow-outline mr-[23.49px] placeholder:text-[15.6573px]" type="text" placeholder="First Name" name="firstName" />
              <ValidationError
                prefix="First Name"
                field="firstName"
                errors={state.errors}
              />
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-[#606060] leading-tight focus:outline-none focus:shadow-outline placeholder:text-[15.6573px]" type="text" placeholder="Last Name" name="lastName" />
              <ValidationError
                prefix="Last Name"
                field="lastName"
                errors={state.errors}
              />
            </div>

            <div className="mb-4">
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-[#606060] leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Company Name" name="companyName" />
              <ValidationError
                prefix="Company Name"
                field="companyName"
                errors={state.errors}
              />
            </div>

            <div className="mb-4">
              <select
                className="max-w-full w-full py-2 px-3 text-[#606060]"
                name="companyType"
              >
                <option>Company Type</option>
                <option value="startup">Startup</option>
                <option value="trader">Trader</option>
                <option value="sme">SME</option>
                <option value="freelancer">Freelancer</option>
                <option value="other">Other</option>
              </select>
              <ValidationError
                prefix="Company Type"
                field="companyType"
                errors={state.errors}
              />
            </div>

            <div className="mb-4">
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-[#606060] leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Work Email" name="workEmail" />
              <ValidationError
                prefix="Work Email"
                field="workEmail"
                errors={state.errors}
              />
            </div>

            <div className="mb-4">
              <select className="w-[100%] py-2 px-3 text-[#606060]">
                <option>Select Country</option>
                <option>Nigeria</option>
                <option>United States of America</option>
              </select>
              <ValidationError
                prefix="Country"
                field="country"
                errors={state.errors}
              />
            </div>
            {/* .w-\[16rem\] {
    width: 16.4rem;
}

.ml-\[-4rem\] {
    margin-left: -3rem;
} */}

            {screenWidth > 640 ? (
              <div className="grid items-center grid-cols-1 mb-4 sm:grid-cols-2">
                <div className='mb-[1rem] sm:mb-[0rem]'>
                  <select className="w-[9.7rem] py-2 px-3 text-[#606060]">
                    <option>Country Code</option>
                    <option>+234</option>
                    <option>+1</option>
                  </select>
                  <ValidationError
                    prefix="Country Code"
                    field="countryCode"
                    errors={state.errors}
                  />
                </div>
                <input className="shadow appearance-none border rounded sm:w-[16.4rem] sm:ml-[-3rem] py-2 px-3 text-[#606060] leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Phone Number" name="phoneNumber" />
                <ValidationError
                  prefix="Phone Number"
                  field="phoneNumber"
                  errors={state.errors}
                />
              </div>
            ) : null}

            {screenWidth < 640 ? (

              <div className="grid items-center justify-between grid-cols-2 gap-1">
                <div>
                  <select className="w-[4.7rem] py-2 px-3 text-[#606060]">
                    <option>Code</option>
                    <option>+234</option>
                    <option>+1</option>
                  </select>
                  <ValidationError
                    prefix="Country Code"
                    field="countryCode"
                    errors={state.errors}
                  />
                </div>
                <input className="shadow ml-[-4rem] appearance-none border w-[240px] rounded py-2 px-3 text-[#606060] leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Phone Number" name="phoneNumber" />
                <ValidationError
                  prefix="Phone Number"
                  field="phoneNumber"
                  errors={state.errors}
                />
              </div>
            ) : null}


            <div className="mb-4">
              <select className="w-[100%] py-2 px-3 text-[#606060]">
                <option>Product of Interest</option>
                <option>All</option>
                <option>Tracking business spend</option>
                <option>Invoicing customers</option>
                <option>Virtual and physical cards</option>
                <option>Cross-border payments</option>
                <option>USD bank account</option>
              </select>
              <ValidationError
                prefix="Product of Interest"
                field="productOfInterest"
                errors={state.errors}
              />
            </div>
            <div className="mb-4">
              <select className="w-[100%] py-2 px-3 text-[#606060]">
                <option>How did you hear about us?</option>
                <option>Online search</option>
                <option>Social media</option>
                <option>Word of mouth</option>
                <option>Other</option>
              </select>
              <ValidationError
                prefix="Hear about Us"
                field="hearAboutUs"
                errors={state.errors}
              />
            </div>

            <div className="mb-4">
              <textarea className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="message" rows={4} placeholder="Anything else to add?" name="message"></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button type="submit" disabled={state.submitting} className="bg-[#000000] text-white py-2 px-4 hover:bg-[#000000] focus:outline-none focus:shadow-outline w-[100%] rounded-[3.91433px]">
              Join Cleva
            </button>
          </form>

        </div>
        {screenWidth < 640 ? (<div className="sm:mt-[292.5px] mt-[2rem] text-[white] mb-[2rem]">
          <p className='font-[500]'>Contact us:</p>
          <p>contact@getcleva.com</p>
        </div>) : null}
      </div>

      <div className="px-[1rem] sm:pl-[0rem] pb-[1rem] text-center sm:text-left sm:mx-[5rem] text-[#000000] text-[12px] font-[200] leading-[20px] mt-[62.68px]">
        <h1 className="mb-[10px]">(c) 2023 Cleva Technologies, Inc.  </h1>
        <h1>Cleva, a company incorporated under the laws of Delaware, the United States of America, is a financial technology company and not a bank.
          All banking services are provided by our licensed banking partners.</h1>
      </div>
    </div>


  )
}

export default Footer