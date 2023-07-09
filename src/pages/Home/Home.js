import React from "react";
import { NavLink } from "react-router-dom";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { useTrips } from "../../context/TripContext";
import "./Home.css";
import { DataCard } from "../../components/DataCard";

export const Home = () => {
  const { tripData } = useTrips();

  return (
    <div className="home__container">
      <h1>Welcome to Trip Advisor</h1>
      <h3>Top Continents for your next holiday</h3>

      <div className="data__container">
        {tripData.map((item) => (
          <DataCard key={item.id} item={item} path={`/${item.name}`} />
        ))}
      </div>
    </div>
  );
};
