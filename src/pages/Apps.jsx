import React, { useState } from "react";
import useGames from "../Hooks/useGames";
import GameCard from "../components/GameCard";
import searchImg from "../assets/search.png";

const Apps = () => {
  const { games } = useGames();
  const [search, setSearch] = useState("");

  const term = search.trim().toLowerCase();
  const searchedGames = term
    ? games.filter((game) => game.title.toLowerCase().includes(term))
    : games;

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

      {searchedGames.length === 0 ? (
        <p className="text-center text-2xl text-gray-500 my-10">
          No App Found!
        </p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-10 mx-auto">
          {searchedGames.map((game) => (
            <GameCard key={game.id} game={game}></GameCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
