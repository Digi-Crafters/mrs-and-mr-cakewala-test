import React from "react";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";

const page = () => {
  return (
    <div>
      <Hero />
      <Menu/>
      <About/>
      <Contact/>
      
    </div>
  );
};

export default page;
