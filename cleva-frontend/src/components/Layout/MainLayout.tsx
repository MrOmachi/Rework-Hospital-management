import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
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
            <div className=" max-h-[90vh] overflow-y-scroll scrollBarSettings" id="content">
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
