import { createContext, useContext, useState } from "react";
import { tripJSONData } from "../Data";

const TripContext = createContext();

export function TripProvider({ children }) {
  const [tripData, setTripData] = useState(tripJSONData.continents);
  const [data, setData] = useState({
    continentId: null,
    countryId: null,
    locationId: null
  })

  const handleClick = (type, id) => {
    if (type === "continent") {
      setData((prev) => ({ ...prev, continentId: id }));
    } 
    if (type === "country") {
      setData((prev) => ({ ...prev, countryId: id }));
    }
    if (type === "location") {
      setData((prev) => ({ ...prev, locationId: id }));
    }
  }
  
  return (
    <TripContext.Provider
      value={{
        handleClick,
        tripData
      }}
    >
      {children}
    </TripContext.Provider>
  );
}
export const useTrips = () => useContext(TripContext);
