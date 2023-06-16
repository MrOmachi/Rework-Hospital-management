import React, { useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import axios from "axios";
import { setKycStatus } from "../../features/KycSlice/kycSlice";

export default function MainLayout() {
  const KYCI = JSON.parse(localStorage.getItem("KYCI") as string);
  const { kycStatus } = useAppSelector((state) => state.kycInfo);
  const dispatch = useAppDispatch();

  const fetchData = () => {
    axios
      .get(
        `https://19ko4ew25i.execute-api.eu-west-1.amazonaws.com/qa/api/v1/kyc/${KYCI}`
      )
      .then((response) => {
        dispatch(setKycStatus(response.data.BusinessKyc.KycState));
      })
      .catch((error) => {
        dispatch(setKycStatus("FAILED"));
      });
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="w-12/12 overflow-hidden">
      <section className="flex justify-between m-auto">
        {/* sideBar */}
        <SideBar />
        {/* Nav With Content */}
        <div id="NavWithContent" className="w-[80%] pt-3 ">
          {/* navBar */}
          <div id="navwithcontent" className="w-[90%] m-auto ">
            <div id="navBar">
              <Nav />
            </div>
            {/* main content */}
            <div
              className=" max-h-[90vh] overflow-y-scroll scrollBarSettings"
              id="content"
            >
              <Outlet />
            </div>
          </div>
          {/* Footer */}
          <div id="footer">
            <Footer />
          </div>
        </div>
      </section>
    </div>
  );
}
