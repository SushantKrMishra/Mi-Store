import React, { useState, useEffect } from "react";
import NavCard from "./NavCard.jsx";
import "../styles/NavOptions.css";

const NavOptions = ({ mainData }) => {
  return (
    <div className="navOptions">
      {mainData.map((item) => (
        <NavCard
          name={item.name}
          price={item.price}
          image={item.image}
          key={item.image}
        />
      ))}
    </div>
  );
};

export default NavOptions;
