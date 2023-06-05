import React from "react";
import USIcon from "../../images/USD.svg";
import NGIcon from "../../images/ngn.svg"
import Arrow from "../../images/Arrow.png"

const index = () => {
  return (
  <div className="flex items-center">
    <img src={USIcon} alt="" srcSet="" />
    <img src={Arrow} alt="" srcSet="" className="mx-2"/>
    <img src={NGIcon} alt="" srcSet="" />

  </div>
  )
};

export default index;
