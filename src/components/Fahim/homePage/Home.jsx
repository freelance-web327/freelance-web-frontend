import React from "react";
import Header from "./pageComponents/Header";
import HeroSection from "./pageComponents/HeroSection";
import Services from "./pageComponents/Services";
import Category from "./pageComponents/Category";
import Footer from "./pageComponents/Footer";

function Home() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Services />
      <Category />
      <Footer />
    </div>
  );
}

export default Home;
