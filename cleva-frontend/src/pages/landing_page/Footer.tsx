import React from 'react'
import marchantaccount from "../../asset/landing_photos/marchantaccount.svg"
import { useForm, ValidationError } from '@formspree/react'


interface IFooter {
  innerRef?: React.RefObject<HTMLDivElement>;
}

const Footer = (props: IFooter) => {
  const { innerRef } = props
  const [state, handleSubmit] = useForm("xrgvapak");
  if (state.succeeded) {
    return <div className="text-[2rem] text-center my-[2rem]">Thanks for joining!</div>;
  }

  const screenWidth = window.innerWidth;

  return (
    <div className='bg-[#FFDCA7]' ref={innerRef}>
      <div className='flex items-center justify-between'>
        <div className="mx-auto mt-[45.39px]">
          <img src={marchantaccount} className="h-[4rem] sm:h-[101px]" alt='' />
        </div>
      </div>
      <h1 className="sm:text-[35.2289px] font-[600] leading-[43px] sm:mb-[56.7px] text-center">Cleva banking is smart banking!</h1>
      <div className=" bg-black rounded-lg grid grid-cols-1 lg:grid-cols-2 justify-between items-center lg:py-[94.92px] xl:pl-[3rem] xl:gap-[12rem] px-[3rem]  mt-[2rem] sm:mx-[5rem]">
        <div className="text-white ml-[-1rem] sm:ml-[1.5rem]">
          <h2 className="text-[27.4003px] font-bold mb-[25.71px] text-[#FF9E0B] mt-[2rem]">Sign up</h2>
          <span className="bg-[#FF9E0B] text-[#000000] py-[9.97px] px-[11.74px] leading-[29px] lg:text-[18.486px] font-[500] rounded-r-[24.4645px]">
            Take control of your finances
          </span>
          <div className="text-[#FFFFFF] leading-[24px] mt-[30.34px] sm:pr-[6rem]">
            <span>Fill out this form and we will contact you shortly. </span>
            <span> We’ll only use your information to contact you about Cleva and nothing else.</span>
          </div>
          {screenWidth > 640 ? (<div className="lg:mt-[292.5px] mt-[2rem]">
            <p className='font-[500]'>Contact us</p>
            <p>contact@getcleva.com</p>
          </div>) : null}

        </div>
        <div className="px-[21.31px] sm:px-[32.31px] rounded-lg  bg-[#FF9E0B] sm:w-[437.12px] xl:w-[437.12px] my-[2rem] md:ml-[1.5rem] lg:ml-[-1.7rem] xl:ml-[0rem] sm:ml-[1.5rem]">
          <form className="pt-[24.86px] pb-[24.86px]" onSubmit={handleSubmit}>
            <div className="flex justify-between mb-4">
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-[#606060] leading-tight focus:outline-none focus:shadow-outline mr-[23.49px] placeholder:text-[15.6573px]" type="text" placeholder="First Name" name="firstName" required/>
              <ValidationError
                prefix="First Name"
                field="firstName"
                errors={state.errors}
              />
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-[#606060] leading-tight focus:outline-none focus:shadow-outline placeholder:text-[15.6573px]" type="text" placeholder="Last Name" name="lastName" required/>
              <ValidationError
                prefix="Last Name"
                field="lastName"
                errors={state.errors}
              />
            </div>

            <div className="mb-4">
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-[#606060] leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Company Name" name="companyName" required/>
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
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-[#606060] leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Work Email" name="workEmail" required />
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
            <div>
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
                <input className="shadow appearance-none border rounded mb-4 w-full mt-4 py-2 px-3 text-[#606060] leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Phone Number" name="phoneNumber" required/>
                <ValidationError
                  prefix="Phone Number"
                  field="phoneNumber"
                  errors={state.errors}
                />
              </div>


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