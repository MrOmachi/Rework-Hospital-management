import React from 'react'
import BackIcon from "../../images/leftArrow.svg"
import { useNavigate } from 'react-router-dom';
const BackArrow = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1)
  }

  return (
    <button className='border border-[#CFDBD5B2] py-3 px-3.5 rounded-lg' onClick={goBack}>
      <img src={BackIcon} alt="back" />
    </button>
  )
}

export default BackArrow