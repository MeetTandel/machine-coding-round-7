import React from "react";
import { useParams } from "react-router-dom";
import { useTrips } from "../../context/TripContext";
import "./Home.css";
import { DataCard } from "../../components/DataCard";

export const CountryDetails = () => {
  const { country } = useParams();
  const { tripData } = useTrips();
  const findCountryData = tripData.find(
    (item) => item.name === country
  ).countries;

  return (
    <div className="home__container">
      <h3>Top Countries in {country} for your next holiday</h3>

      <div className="data__container">
        {findCountryData.map((item) => (
          <DataCard
            key={item.id}
            item={item}
            path={`/${country}/${item.name}`}
          />
        ))}
      </div>
    </div>
  );
};
