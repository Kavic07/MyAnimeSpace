import React from "react";
import AnimeCard from "../AnimeCard/AnimeCard";
import "./AnimeList.css";

const AnimeList = ({ anime, onCardClick }) => {
  if (!Array.isArray(anime) || anime.length === 0) {
    return <p style={{ textAlign: "center" }}>Loading...</p>;
  }

  return (
    <div className="animelist-container">
      {anime.map((item) => (
        <AnimeCard
          key={item.mal_id}
          title={item.title}
          image={item.images.jpg.image_url}
          trailerUrl={item.trailer?.embed_url}
          onClick={onCardClick}
        />
      ))}
    </div>
  );
};

export default AnimeList;
