import m61 from "../assets/m61.svg"

interface ITrackAll {}

const TrackAll = (props: ITrackAll) => {
  return (
    <div className="container mx-auto mt-8">
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
    {/* <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'> */}
     <div className="flex justify-center items-center">
      <h1 className="text-[35.2289px]  w-[641.95px] font-[600] leading-[43px]
      break-normal md:break-all">Track all of your <span className='text-[#FF9E0B]'>finances</span> in one dashboard
      <br/><span><p className="text-base leading-6">Easily view how much money your business has received and spent. No more spreadsheets, use Cleva!</p></span></h1>
     </div>

     <div>
      <img src={m61} className='w-48 h-48 lg:w-96 lg:h-96 block mx-auto' />
     </div>
     
    </div>
    </div>
  )
}

export default TrackAll

// flex items-center justify-between  mx-[82.2px]

//<h1 className="w-[641.95px]">For the h1 part </h1>

// w-[533.33px] h-[588.13px]