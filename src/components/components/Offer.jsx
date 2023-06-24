import React from "react";

const Offer = ({ src, link, index }) => {
  return (
    <a href={link}>
      <img src={src} alt={`${index + 1} Offer`} />
    </a>
  );
};

export default Offer;
