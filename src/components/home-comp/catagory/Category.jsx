import React from "react";
import img from "../../../assets/img/ticketPage.png";

import "./category.scss";

function Category({ item }) {
  const { name, descriptionm, thumbnail } = item;

  const desing = {
    backgroundImage: `url(${thumbnail})`,
  };

  return (
    <div style={desing} className="category-card">
      <div className="categoty-overlay">
        <p>{name}</p>
      </div>
    </div>
  );
}

export default Category;
