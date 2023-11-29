import React from "react";
import Banner from "../Banner/Banner";
import PetCategory from "../PetCategory/PetCategory";
import Inspriable from "../Inspriable/Inspriable";
import About from "../About/About";
import MoreSectionOne from "../MoreSectionOne/MoreSectionOne";
import MoreSectionTwo from "../MoreSectionTwo/MoreSectionTwo";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PetCategory></PetCategory>
      <Inspriable></Inspriable>
      <About></About>
      <MoreSectionOne></MoreSectionOne>
      <MoreSectionTwo></MoreSectionTwo>
    </div>
  );
};

export default Home;
