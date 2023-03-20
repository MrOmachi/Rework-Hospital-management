import React from 'react'
import marchantaccount from "../assets/marchantaccount.svg"


interface IFooter {}

const Footer = (props: IFooter) => {
  return (
    <div className='bg-[#FFDCA7]'>
    <div className='flex justify-between items-center'>
     <div className="mx-auto">
       <img src={marchantaccount} />
     </div>
    </div>
       <h1 className="mx-auto pl-8 text-[35.2289px] w-[641.95px] font-[600] leading-[43px]">Cleva banking is smart banking!</h1>

       <div className="bg-black w-[1000px] h-[700px] mx-auto container rounded-lg mt-4">
  <div className="max-w-xl mx-auto grid grid-cols-2 gap-4 py-[150px]">
    <div className="text-white">
      <h2 className="text-xl font-bold mb-4">Text Column</h2>
      <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt justo sed odio gravida, sed interdum nibh euismod. Duis a mauris a tellus lobortis vestibulum. Fusce in velit vitae nulla malesuada accumsan. Vestibulum fermentum sagittis metus, vel pulvinar nunc. </p>
      <p>Donec at justo libero. Praesent non odio non mi pharetra consectetur vel quis augue. Nulla sagittis nunc in ligula aliquet luctus. Etiam sed aliquam orci, in venenatis leo. Praesent sit amet eros eget enim lobortis eleifend a vitae magna. </p>
    </div>
    <div className="bg-white p-4 rounded-lg">
      <h2 className="text-lg font-bold mb-4">Form Column</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" >
            Name
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your name"/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email"/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" >
            Message
          </label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows={4} placeholder="Enter your message"></textarea>
        </div>
        <button className="bg-gray-800 text-white py-2 px-4 rounded-full hover:bg-gray-900 focus:outline-none focus:shadow-outline" type="button">
          Submit
        </button>
      </form>
    </div>
  </div>
</div>
Name

    </div>
  )
}

export default Footer