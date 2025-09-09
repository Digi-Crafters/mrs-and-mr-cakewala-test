import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Customize from "./components/Customize"
import Menu from "./components/Menu"


const page = () => {
  return (
    <div>
        <Navbar />
      <Hero />
      <Menu/>
      <Customize/>
    </div>
  );
};

export default page;
