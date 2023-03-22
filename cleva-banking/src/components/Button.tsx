import React from 'react'
import { Link } from "react-router-dom"

interface IButton {
 text?: string
 buttonStyle: string
 onLinkClick: () => void
}

const Button = (props: IButton) => {
 const { text, buttonStyle, onLinkClick } = props
 return (
  <button className={buttonStyle} >
   <a className="px-4 font-bold" onClick={() => onLinkClick()}>
    {text}
   </a>
  </button>
 )
}

export default Button