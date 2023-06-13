import BeforeKyc from "./beforeKyc";
import AfterKyc from "./afterKyc/After_Kyc/AfterKyc";
import { useAppSelector } from "../../app/hooks";
import Spinner from "../../components/PopUps/Spinner";

const Home = () => {
  const { kycStatus } = useAppSelector((state) => state.kycInfo);

  return (
    <div className="flex">
      {
        kycStatus === "PENDING" ? <BeforeKyc /> : kycStatus === "SUCCESSFUL" ? <AfterKyc />: <Spinner />
      }
    </div>
  );
};

export default Home;
