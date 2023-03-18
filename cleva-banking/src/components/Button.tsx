import React from 'react'
import { Link } from "react-router-dom"

interface IButton {
 text?: string
 buttonStyle: string
}

const Button = (props: IButton) => {
 const { text, buttonStyle } = props
 return (
  <button className={buttonStyle}>
   <Link className="px-4 font-bold" to="/">
    {text}
   </Link>
  </button>
 )
}

export default Button