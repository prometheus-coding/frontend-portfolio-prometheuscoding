import React from "react";
// import Hero from "./components/Hero";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import "./homepage.css";
import Hero2 from "./components/Hero2";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Hero2/>
      <Navbar />
    </React.Fragment>
  );
}
