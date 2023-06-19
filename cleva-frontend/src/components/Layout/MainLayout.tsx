/* eslint-disable react-hooks/exhaustive-deps */
import Nav from "./Nav";
import Footer from "./Footer";
import SideBar from "./SideBar";
import { Outlet, useNavigate } from "react-router-dom";
import { setupAxiosAuth } from "../../login";

export default function MainLayout() {
    const navigate = useNavigate();
    try{
      // this function only sets up axios auth if user has tokens in localStorage i.e user is logged in
      setupAxiosAuth();
    } catch(_){
      // if token is invalid or expired or not present redirect to login page
      navigate("/auth/login")
    }

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
