import React from "react";
import Hero from "../hero/Hero";
import Poppular from "../poppular/poppular";
import Offer from "../offer/offer";
import Newsletter from "../newsletter/newsletter";
import NewCollection from "../newcollection/newcolletion";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Poppular/>
      <Offer/>
      <NewCollection></NewCollection>
      <Newsletter/>
      
    </div>

  );
};

export default Shop;
