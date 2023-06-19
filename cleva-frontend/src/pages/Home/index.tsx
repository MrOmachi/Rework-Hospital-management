import Atm_icon from "../../asset/kyc/atmCard.svg";
import Open_acc from "../../asset/kyc/openAccount.svg";
import World_cur from "../../asset/kyc/worldCurrency.svg";
import Lock_icon from "../../asset/kyc/Lock_icon.svg";
import { MdWavingHand, MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import { Card, KycFeatureCard } from '../Kyc/components/Features';
import { useAppSelector } from '../../app/hooks';
import { KycStatus } from "../Kyc/components/KycStatus";
import { useNavigate } from "react-router-dom";

interface IFeature {
  id: number;
  title: string;
  text?: string;
  body?: string;
  icon: string;
}

const Home = () => {
  const { BusinessKyc } = useAppSelector((state) => state.kycInfo);
  const navigate = useNavigate();
     
  const recentTransfers: any[] = [];

  const beforeKycContent: IFeature[] = [
    {
      id: 1,
      title: "Complete KYC",
      text: "Required",
      body: "Completing KYC verification is a crucial step in securing your account and ensuring that you have access to all of the features available.",
      icon: Lock_icon,
    },
  ];

  const FeatureContent: IFeature[] = [
    {
      id: 1,
      title: "Transfer from your existing USD bank to Nigeria",
      icon: World_cur,
    },
    {
      id: 2,
      title: "Open a USD bank account",
      text: "COMING SOON",
      body: "Also comes with a NGN bank account",
      icon: Atm_icon,
    },
    {
      id: 3,
      title: "Open a NGN bank account",
      text: "COMING SOON",
      icon: Open_acc,
    },
  ];
  return (
    <div className=" pt-5 w-full m-auto ">
      <header>
        
        <KycStatus/>

        <section className="pt-6 ">
          <p className="flex text-sm ">
            Welcome,
            <b className="gap-3 flex items-center ">
              Tolu Enterprises
              <span className="text-[17px] opacity-50 -rotate-90">
                <MdWavingHand />
              </span>
            </b>
          </p>

          <p className=" text-[12px] text-[#8E8E8E] pt-1 ">
            what would you like to do today?
          </p>
        </section>
      </header>

      <section className="pt-8">
          <h1 className="font-semibold text-sm pb-1">To Do</h1>
          <div className="flex justify-between space-x-7 cursor-pointer" onClick={() => navigate("/kyc")}>
            {beforeKycContent.map((bkyc) => (
              <Card
                key={bkyc.id}
                title={bkyc.title}
                body={bkyc.body as string}
                text={bkyc.text as string}
                icon={bkyc.icon}
              />
            ))}
          </div>
      </section>

      <section className="pt-6">
        <h1 className="font-semibold text-sm pb-3">Try out these features</h1>
        <div className="flex justify-evenly space-x-7 [&>*:first-child]:bg-black [&>*:first-child]:rounded-xl">
          {FeatureContent.map((bkyc) => (
            <KycFeatureCard
              key={bkyc.id}
              title={bkyc.title}
              body={bkyc.body}
              text={bkyc.text}
              icon={bkyc.icon}
            />
          ))}
        </div>
      </section>

{BusinessKyc.KycState ==="VERIFIED" ?
      <section className='pt-8'>
        <h1
          className="font-semibold text-sm pb-3">
          Recent Transactions
        </h1>
        {
          !recentTransfers &&
          <div className=' bg-[#F9F9F9] flex justify-center h-[32vh] items-center rounded-xl'>
            <div className=' text-center text-[13px]'>
              <p>
                Seems you haven't done any transactions yet
              </p>
              <b 
              onClick={()=> {return}}
              className='flex items-center justify-center gap-2 cursor-pointer'>
                <div>
                  <MdOutlineSubdirectoryArrowRight />
                </div>
                Make a transfer
              </b>
            </div>
          </div>
        }
        {
          recentTransfers &&
          <div
            className=' overflow-y-scroll scrollBarSettings h-[35vh] bg-[#F9F9F9] py-3 px-6 rounded-xl w-[60%]'>
            {
              recentTransfers?.map((data) => (
                <div
                  key={data.id}
                  className=' border-b py-2 flex justify-between items-center '>
                  <div className='flex items-center '>
                    <span
                      className={`
                      ${data.status === "Pending" ? "text-[#AFB2B5] bg-[#7B8186]" :
                          data.status === "Failed" ? "bg-[#F5EBEB] text-[#ff5757]" :
                            data.status === "In transit" ? "text-[#1892D7] bg-[#CAECFF]" :
                              data.status === "Completed" ? "text-[#2D7236] bg-[#DAE1DB]" :
                                null
                        } rounded-full text-white p-2 mr-4`}> <MdOutlineSubdirectoryArrowRight /> </span>
                    <div className=' leading-5'>
                      <div className='font-semibold text-[13px]'>Transfer to {data.receiver}</div>
                      <div
                        className='text-[11px] text-gray-500 font-semibold'>
                        {data.date}
                      </div>
                    </div>
                  </div>
                  <div className='text-right leading-5'>
                    <div className='font-semibold text-[13px]'>{data.amount}</div>
                    <div className={`
                    ${data.status === "Pending" ? "text-gray-500" :
                        data.status === "Failed" ? " text-red-500" :
                          data.status === "In transit" ? "text-[#1892D7]" :
                            data.status === "Completed" ? "text-[#2D7236]" :
                              null
                      }
                    text-[11px] font-semibold`
                    }>{data.status}</div>
                  </div>
                </div>
              ))
            }
            <u className='text-center cursor-pointer flex justify-center pt-4 text-[13px] font-bold' >
              See more
            </u>
          </div>
        }
      </section>
      :null}

    </div>
  )
};

export default Home;
