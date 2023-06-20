import React from 'react'
import loader from "../../asset/images/kolici-yukleniyor.gif"

export default function Spinner() {
  return (
    <div className='flex justify-center items-center h-[80vh] w-[5%] m-auto'>
     <img 
     src={loader} 
     alt="loading..." 
     className='w-full'
     />
    </div>
  )
}
