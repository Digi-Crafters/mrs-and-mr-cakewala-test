import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Customize from "./components/Customize"
import Menu from "./components/Menu"
import Story from "./components/Story"
import Contact from "./components/Contact";
const page = () => {
  return (
    <div>
        <Navbar />
      <Hero />
      <Menu/>
      <Customize/>
      <Story/>
        <Contact/>
    </div>
  );
};

export default page;
