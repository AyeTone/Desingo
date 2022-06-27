import React from "react";
import { MappedLocation } from "../components/UI";
import Canada from "../assets/locations/desktop/image-map-canada.png";
import Australia from "../assets/locations/desktop/image-map-australia.png";
import UnitedKingdom from "../assets/locations/desktop/image-map-united-kingdom.png";

const Locations = () => {
  return (
    <main>
      <div className="locations__wrapper">
        <MappedLocation
          img={Canada}
          title="Canada"
          area="Central"
          address1="3886 Wellington Street"
          address2="Toronto, Ontario M9C 3j5"
          phone="+1 253-863-8967"
          email="contact@designo.co"
        />
        <MappedLocation
          img={Australia}
          title="Australia"
          area="AU"
          address1="19 Balonne Street"
          address2="New South Wales 2443"
          phone="(02) 6720 9092"
          email="contact@designo.au"
        />
        <MappedLocation
          img={UnitedKingdom}
          title="United Kingdom"
          area="UK"
          address1="13 Colorado Way"
          address2="Rhyd-y-fro SA8 9GA"
          phone="078 3115 1400"
          email="contact@designo.uk"
        />
      </div>
    </main>
  );
};

export default Locations;
