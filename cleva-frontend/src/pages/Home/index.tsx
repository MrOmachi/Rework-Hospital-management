import React from "react";
import BeforeKyc from "./beforeKyc";
import Create_Layout from "../Layout/Create_Layout";
import Nav from "../Layout/Nav";
import Footer from "../Layout/Footer";

const Home = () => {
  return (
    <div className="flex">
      <Create_Layout />
      <div className="">
        <Nav />
        <BeforeKyc />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
