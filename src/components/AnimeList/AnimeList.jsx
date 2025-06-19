import React from "react";
import AnimeCard from "../AnimeCard/AnimeCard";

const AnimeList = ({ anime }) => {
  if (!Array.isArray(anime) || anime.length === 0) {
    return <p style={{ textAlign: "center" }}>Anime is not available</p>;
  }

  return (
    <div className="animelist-container">
      {anime.map((item) => (
        <AnimeCard
          key={item.mal_id}
          title={item.title}
          image={item.images.jpg.image_url}
        />
      ))}
    </div>
  );
};

export default AnimeList;
