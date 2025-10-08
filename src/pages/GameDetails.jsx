import React from "react";
import { useParams } from "react-router";
import useGames from "../Hooks/useGames";
import iconDownloads from "../assets/icon-downloads.png";
import iconStar from "../assets/icon-ratings.png";
import iconReview from "../assets/icon-review.png";

const GameDetails = () => {
  const { id } = useParams();
  const { games, loading, error } = useGames();
  const game = games.find((g) => String(g.id) === id);

  if (loading) {
    return <div>Loading...</div>;
  }
  const {
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
  } = game || {};

  const handleInstalledApps = () => {
    const existingList = JSON.parse(localStorage.getItem("installedApps"));
    let updatedList = [];
    const isDuplicate = existingList.some((app) => app.id === game.id);
    if (isDuplicate) {
        return alert("App is already installed");
    }
    if (existingList) {
         updatedList = [...existingList, game];
    }
    else {
        updatedList.push(game);
    }
    localStorage.setItem("installedApps", JSON.stringify( updatedList));
  };
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex flex-col lg:flex-row gap-2 items-center mt-10">
        <figure className="px-5 pt-5 h-48 overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={game?.image}
            alt="Game Logo"
          />
        </figure>

        <div className="flex flex-col justify-between items-center lg:items-start gap-2 ">
          <div>
            <h2 className="text-[32px] text-[#001931] font-bold">
              {game.title}
            </h2>
            <p className="text-[20px] text-gray-500">
              Developed by
              <span className="gradient-text">{game.companyName}</span>
            </p>
          </div>

          <hr className="w-full border-t border-gray-200 mt-2" />

          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-2 ">
            <div className="flex flex-col items-center gap-2 mb-4">
              <img className="w-[30px] h-[30px]" src={iconDownloads} alt="" />
              <p className="text-[#001931] text-[16px]">Downloads</p>
              <h1 className="text-[#001931] text-[40px] font-bold">
                {downloads}
              </h1>
            </div>

            <div className="flex flex-col items-center gap-2 mb-4">
              <img className="w-[30px] h-[30px]" src={iconStar} alt="" />
              <p className="text-[#001931] text-[16px]">Downloads</p>
              <h1 className="text-[#001931] text-[40px] font-bold">
                {ratingAvg}
              </h1>
            </div>

            <div className="flex flex-col items-center gap-2 mb-4">
              <img className="w-[30px] h-[30px]" src={iconReview} alt="" />
              <p className="text-[#001931] text-[16px]">Total Reviews</p>
              <h1 className="text-[#001931] text-[40px] font-bold">
                {reviews}
              </h1>
            </div>
          </div>

          <button onClick={handleInstalledApps} className="btn bg-[#00d390] text-white">Install Now</button>
        </div>
      </div>
      <hr className="w-full border-t border-gray-200 mt-5" />

      <h2 className="text-[26px] text-[#001931] font-bold mt-5">Ratings</h2>

      <h2 className="text-[26px] text-[#001931] font-bold mt-5">Description</h2>
      <p className="text-[20px] text-gray-500">{game.description}</p>
    </div>
  );
};

export default GameDetails;
