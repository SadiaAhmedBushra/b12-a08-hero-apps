import React, { useState, useEffect } from "react";
import useGames from "../Hooks/useGames";
import GameCard from "../components/GameCard";
import searchImg from "../assets/search.png";
import LoadingSpinner from "../components/LoadingSpinner";

const Apps = () => {
  const { games, loading } = useGames();
  const [search, setSearch] = useState("");

  const [searching, setSearching] = useState(false);

  const term = search.trim().toLowerCase();
  const searchedGames = term
    ? games.filter((game) => game.title.toLowerCase().includes(term))
    : games;

  useEffect(() => {
    if (!term) return;

    setSearching(true);
    const timer = setTimeout(() => {
      setSearching(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [term]);

  const isLoading = loading || searching;

  return (
    <div className="w-11/12 mx-auto mt-10 lg:mt-20">
      <h1 className="text-[34px] lg:text-[48px] font-bold text-center my-5">
        Our All Applications
      </h1>
      <p className="text-[20px] text-[#627382] text-center mb-5">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className="flex lg:flex-row flex-col-reverse gap-5 justify-between items-center">
        <h1 className="font-bold text-[24px]">
          ({searchedGames.length}) applications found
        </h1>

        <label className="input">
          <div className="w-full flex justify-between items-center gap-2">
            <img src={searchImg} alt="" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="search"
            />
          </div>
        </label>
      </div>

      {isLoading ? (
        <LoadingSpinner count={15} />
      ) : searchedGames.length === 0 ? (
        <p className="text-center text-2xl text-gray-500 my-10">
          No App Found!
        </p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-10 mx-auto">
          {searchedGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
