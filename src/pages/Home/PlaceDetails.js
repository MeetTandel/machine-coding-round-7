import React from "react";
import { useParams } from "react-router";
import { useTrips } from "../../context/TripContext";
import "./Home.css";

export const PlaceDetails = () => {
  const { country, location, place } = useParams();
  const { tripData } = useTrips();
  const findPlaceBasedOnLocation = tripData
    .find((item) => item.name === country)
    .countries.find((item) => item.name === location)
    .destinations.find((item) => item.name === place.split("-").join(" "));

  return (
    <div className="home__container">
      <h1>{findPlaceBasedOnLocation.name}</h1>

      <div className="place__content">
        <div className="left__pane">
          <img src={findPlaceBasedOnLocation.image} alt="place" />
        </div>
        <div className="right__pane">
          <p>
            <span>Description: </span>
            {findPlaceBasedOnLocation.description}
          </p>
          <p>
            <span>Ratings: </span>
            {findPlaceBasedOnLocation.ratings}
          </p>
          <p>
            <span>Reviews: </span>
            {findPlaceBasedOnLocation.reviews}
          </p>
          <p>
            <span>Location: </span>
            {findPlaceBasedOnLocation.location}
          </p>
          <p>
            <span>Opening Hours: </span>
            {findPlaceBasedOnLocation.openingHours}
          </p>
          <p>
            <span>Ticket Price: </span>
            {findPlaceBasedOnLocation.ticketPrice}
          </p>
          <a href={findPlaceBasedOnLocation.website} target="_blank">
            Website
          </a>
        </div>
      </div>
    </div>
  );
};
