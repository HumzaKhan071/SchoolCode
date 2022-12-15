import React from "react";
import Footer from "../Footer/Footer";
import FormComp from "../FormComp/FormComp";
import Header from "../Header/Header";
import SimplifyComp from "../SimplifyComp/SimplifyComp";
import Home1 from "./Home1/Home1";
import Home2 from "./Home2";
import Home3 from "./Home3";
import HomeScreen from "./HomeScreen";

const Home = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <HomeScreen />
      <Home1 />
      <Home2 />
      <Home3 />
      <SimplifyComp />
      <FormComp />
      <Footer />
    </div>
  );
};

export default Home;
