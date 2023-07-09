import React from 'react'
import { useParams } from 'react-router';
import { DataCard } from '../../components/DataCard';
import { useTrips } from '../../context/TripContext';
import "./Home.css"

export const LocationDetails = () => {
    const { country, location } = useParams();
    const { tripData } = useTrips();
    const findLocationBasedOnCountry = tripData
      .find((item) => item.name === country)
      .countries.find(item => item.name === location).destinations

  return (
    <div className="home__container">
      <h3>Top Locations in {location} for your next holiday</h3>

      <div className="data__container">
        {findLocationBasedOnCountry.map((item) => (
          <DataCard
            key={item.id}
            item={item}
            path={`/${country}/${location}/${item.name.split(" ").join("-")}`}
          />
        ))}
      </div>
    </div>
  );
}
