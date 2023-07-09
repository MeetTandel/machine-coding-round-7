import React from 'react'
import { NavLink } from "react-router-dom";
import LocationOnIcon from "@material-ui/icons/LocationOn";

export const DataCard = ({item, path}) => {
  return (
    <div>
      <NavLink to={path}>
        <div
          className="image__container"
          style={{
            backgroundImage: `linear-gradient(to bottom, transparent, rgba(0,0,0, 0.9)), url(${item.image})`,
          }}
        >
          {/* <img src={item.image} alt="continent" /> */}
          <div className="content">
            <LocationOnIcon style={{ color: "white" }} />
            <p>{item.name}</p>
          </div>
        </div>
      </NavLink>
    </div>
  );
}
