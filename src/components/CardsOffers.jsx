import React from "react";
import offers from "../data/offers.json";
import CardOffers from "./CardOffers";

const CardsOffers = () => {
  return (
    <div className="container">
      <div className="row">
        {offers.map((card, index) => (
          <div className="col-md-4" key={index}>
            <CardOffers card={card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsOffers;
