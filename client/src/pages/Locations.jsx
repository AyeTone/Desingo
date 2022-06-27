import React from "react";
import { MappedLocation } from "../components/UI";

const Locations = () => {
  return (
    <main className="locations">
      <div className="locations__wrapper">
        <div className="locations__location">
          <div className="locations__location--canada"></div>
          <MappedLocation
            title="Canada"
            area="Central"
            address1="3886 Wellington Street"
            address2="Toronto, Ontario M9C 3j5"
            phone="+1 253-863-8967"
            email="contact@designo.co"
          />
        </div>
        <div className="locations__location">
          <div className="locations__location--australia"></div>
          <MappedLocation
            title="Australia"
            area="AU"
            address1="19 Balonne Street"
            address2="New South Wales 2443"
            phone="(02) 6720 9092"
            email="contact@designo.au"
          />
        </div>
        <div className="locations__location">
          <div className="locations__location--united"></div>
          <MappedLocation
            title="United Kingdom"
            area="UK"
            address1="13 Colorado Way"
            address2="Rhyd-y-fro SA8 9GA"
            phone="078 3115 1400"
            email="contact@designo.uk"
          />
        </div>
      </div>
    </main>
  );
};

export default Locations;
