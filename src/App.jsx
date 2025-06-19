import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import AnimeList from "./components/AnimeList/AnimeList";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import Pagination from "./components/Pagination/Pagination";

function App() {
  const [animeList, setAnimeList] = useState({});
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const res = await axios.get(
          `https://api.jikan.moe/v4/anime?q=%E6%96%B0%E4%B8%96%E7%B4%80&sfw&page=${page}`
        );
        setAnimeList(res.data.data);
        setLastPage(res.data.pagination.last_visible_page);
      } catch (error) {
        console.error("Failed to fetch anime:", error);
      }
    };

    fetchAnime();
  }, [query, page]);

  const handleSearch = (searchTerm) => {
    setQuery(searchTerm);
    setPage(1); // reset to page 1 on new search
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <div>
        <Header />
        <SearchBar onSearch={handleSearch} />
        <AnimeList anime={animeList} />
        <Pagination
          currentPage={page}
          lastPage={lastPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}

export default App;
