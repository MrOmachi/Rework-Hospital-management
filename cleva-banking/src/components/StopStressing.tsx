import React from 'react'
import one from "../assets/one.svg"
import two from "../assets/two.svg"
import three from "../assets/three.svg"
import stop_stressing from "../assets/stop_stressing.svg"


interface IStopStressing { }

const StopStressing = (props: IStopStressing) => {
 return (
  <div className="sm:px-[82.2px] my-[2rem] sm:mt-[63.61px] sm:mb-[76.33px]">
   <img src={stop_stressing} alt="img" />
  </div>
 )
}

export default StopStressing