import React from "react";
import "./AnimeCard.css";

const AnimeCard = ({ title, image }) => {
  const handleClick = () => {
    alert(`You selected: ${title}`);
  };

  return (
    <div className="animecard-container" onClick={handleClick}>
      <img src={image} alt={title} className="animecard-img" />
      <div className="animecard-wrapper">
        <h4 className="animecard-title">{title}</h4>
      </div>
    </div>
  );
};

export default AnimeCard;
