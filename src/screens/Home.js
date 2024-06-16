import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Card from "../component/Card";
import Carousal from "../component/Carousal";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousal/>
      </div>
      <div>
        <Card/>
      </div>
      <div>
        <Footer />
      </div>
      
    </div>
  );
}
