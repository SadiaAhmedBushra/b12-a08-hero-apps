import React, { useState, useEffect } from "react";
import AppCard from "../components/AppCard";
import searchImg from "../assets/search.png";
import appErrorImg from "../assets/App-Error.png";
import LoadingSpinner from "../components/LoadingSpinner";
import useApps from "../Hooks/useApps";

const Apps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState("");

  const [searching, setSearching] = useState(false);

  const term = search.trim().toLowerCase();
  const searchedApps = term
    ? apps.filter((apps) => apps.title.toLowerCase().includes(term))
    : apps;

  useEffect(() => {
    if (!term) return;

    setSearching(true);
    const timer = setTimeout(() => {
      setSearching(false);
    }, 250);

    return () => clearTimeout(timer);
  }, [term]);

  const isLoading = loading || searching;

  return (
    <div className="w-11/12 mx-auto my-10 lg:my-20">
      <h1 className="text-[34px] lg:text-[48px] font-bold text-center my-5">
        Our All Applications
      </h1>
      <p className="text-[20px] text-[#627382] text-center mb-5">
        Discover top-rated productivity apps designed to help you stay focused,
        organized, and efficient. Explore the best tools curated by ProVault to
        boost your daily workflow.
      </p>

      <div className="flex lg:flex-row flex-col-reverse gap-5 justify-between items-center">
        <h1 className="font-bold text-[24px]">
          ({searchedApps.length}) applications found
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
      ) : searchedApps.length === 0 ? (
        <div className="w-2/5 mt-10 mx-auto border gradient-border">
          <img className="mx-auto mt-10" src={appErrorImg} alt="" />
          <p className="text-center text-2xl text-gray-500 my-10">
            No App Found!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-10  justify-items-center">
          {searchedApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
