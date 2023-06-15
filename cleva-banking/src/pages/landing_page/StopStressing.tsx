import stop_stressing from "../../asset/landing_photos/stop_stressing.svg"


interface IStopStressing { }

const StopStressing = (props: IStopStressing) => {
 return (
  <div className="sm:px-[82.2px] my-[2rem] sm:mt-[63.61px] sm:mb-[76.33px] mx-[2rem] sm:mx-[0rem]">
   <img src={stop_stressing} alt="img" />
  </div>
 )
}

export default StopStressing