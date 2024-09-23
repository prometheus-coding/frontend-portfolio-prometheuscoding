import React from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import "./homepage.css";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Navbar />
    </React.Fragment>
  );
}
