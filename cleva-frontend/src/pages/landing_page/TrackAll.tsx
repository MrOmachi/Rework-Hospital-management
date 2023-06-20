import m61 from "../../asset/landing_photos/m61.svg"

interface ITrackAll { }

const TrackAll = (props: ITrackAll) => {
  return (
    <div className="sm:my-[144.83px] my-[3rem]">
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:gap-[230px] sm:gap-[2rem] justify-between items-center sm:px-[82.2px] px-[2rem] mt-[2rem]'>
        <div>
          <h1 className="sm:text-[35.2289px] text-[25px] font-[600] leading-[43px]break-normal md:break-all text-center sm:text-left">
            Track all of your <span className='text-[#FF9E0B]'>finances</span> in one dashboard
          </h1>
          <span><p className="text-base leading-6 mt-[18.41px] mb-[2rem]">Easily view how much money your business has received and spent. No more spreadsheets, use Cleva!</p></span>
        </div>

        <div>
          <img src={m61} alt="" />
        </div>

      </div>
    </div >
  )
}

export default TrackAll

// flex items-center justify-between  mx-[82.2px]

//<h1 className="w-[641.95px]">For the h1 part </h1>

// w-[533.33px] h-[588.13px]