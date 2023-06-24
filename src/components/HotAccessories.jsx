import React from "react";
import HotItemCard from "./HotItemCard.jsx";
import "../styles/HotAccessories.css";
import { useLocation } from "react-router-dom";
const HotAccessories = ({ main, cover }) => {
  const location = useLocation();
  const isLifestylePath = location.pathname==="/lifestyle"
  return (
    <div className="HotAccessories">
      <div>
        <img src={cover} alt="Cover" />
      </div>

      <div>
        {main.map((item, index) => (
          <HotItemCard
            key={item.image}
            name={item.name}
            price={item.price}
            image={item.image}
            index={index}
          />
        ))}
        {!isLifestylePath&&(<HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg"/>)}
      </div>
    </div>
  );
};

export default HotAccessories;
