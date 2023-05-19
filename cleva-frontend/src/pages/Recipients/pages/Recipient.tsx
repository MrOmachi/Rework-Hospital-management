import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BsPersonPlusFill } from 'react-icons/bs'
import { IoCloseOutline } from "react-icons/io5"
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineModeEditOutline } from "react-icons/md";
import arrow from '../../../images/right-arrow.png'
import IconButton from '../../../components/Layout/buttons/IconButton'

export default function Recipient() {
  const navigate = useNavigate()

  const recipients = [
    {
      id: 1,
      name: "Jason Obi"
    },
    {
      id: 2,
      name: "Edison Furniture & Co."
    },
    {
      id: 3,
      name: "John Doe"
    },
    {
      id: 4,
      name: "Jane Kim"
    },
  ]

  const duration = [
    {
      id: 1,
      value: "1W"
    },
    {
      id: 2,
      value: "1M"
    },
    {
      id: 3,
      value: "3M"
    },
    {
      id: 4,
      value: "6M"
    },
    {
      id: 5,
      value: "1Y"
    },
    {
      id: 6,
      value: "2Y"
    },
  ]

  const details = [
    {
      id: 1,
      key: "Bank name",
      value: "GTBank"
    },
    {
      id: 2,
      key: "Account number",
      value: 111111143552
    },
    {
      id: 3,
      key: "Account name",
      value: "Jason Oni"
    },
  ]

  return (
    <div>
      <header className='
        flex justify-between items-center 
        text-[12px] font-semibold
        '>
        <div>All recipients</div>
        <button
          onClick={() => navigate("")}
          className='flex items-center gap-1'>
          <span>
            <BsPersonPlusFill />
          </span>
          <span>Add new recipient</span>
        </button>
      </header>

      <div className='flex justify-between pt-5'>
        <div className='w-[45%] text-[13px] font-semibold'>
          {
            recipients.map((info) => (
              <div
                key={info.id}
                className='flex items-center justify-between mb-2'>
                <div className='
                  border rounded-md 
                  py-4 ps-5 w-[70%]
                  hover:bg-lime-50'>
                  {info.name}
                </div>
                <span className='w-[30%] text-[70px] text-sm hover:hidden'>
                  <img className='h-10 w-[180px]' src={arrow} alt="" />
                </span>
              </div>
            ))
          }
        </div>
        <div className='border rounded-md w-[50%]'>
          <span
            onClick={() => navigate("")}
            className='text-[20px] float-right cursor-pointer mt-5 mr-5'>
            <IoCloseOutline />
          </span>
          <ul className='
            flex justify-between items-center py-1 px-2 rounded-md
            mt-16 mb-6 bg-gray-100 text-[10px] font-bold w-[70%] m-auto
            '>
            {
              duration.map((info) => (
                <li
                  key={info.id}
                  className='
                  hover:bg-black 
                  py-3 px-5 
                  hover:text-white 
                  rounded-md'>
                  {info.value}
                </li>
              ))
            }
          </ul>
          <div className='text-center'>
            <h2 className='text-[34px] font-extrabold'>N20,000.00</h2>
            <div className='text-[12px] text-gray-500'>Transferred in the last 1 week</div>
            <div className='text-[12px] font-semibold text-cyan-500'>View Transfers</div>
          </div>
          <div
            className='w-[70%] 
              m-auto bg-gray-50 
              rounded-xl px-6 py-3'>
            {
              details.map((info) => (
                <div
                  key={info.id}
                  className='border-b py-3 last:border-none'>
                  <span
                    className='text-[10px] text-gray-500'>
                    {info.key}
                  </span>
                  <span
                    className='text-[12px] ml-8 font-bold'>
                    {info.value}
                  </span>
                </div>
              ))
            }
          </div>
          <div className='flex items-center w-70% justify-between'>
            <div>
              <IconButton
                styles='text-black flex items-center bg-cyan-100 py-2'
                text='Delete'
                icon={<RiDeleteBin6Line />}
                fn={navigate("")}
              />
              <IconButton
                styles='text-black flex items-center py-2 bg-[#FFF5D9]'
                text='Edit'
                icon={<MdOutlineModeEditOutline />}
                fn={navigate("")}
              />
            </div>

            <div>
              <IconButton
                styles='text-black flex items-center py-2 bg-[#FFBD59]'
                text='Transfer'
                icon={<MdOutlineModeEditOutline />}
                fn={navigate("")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
