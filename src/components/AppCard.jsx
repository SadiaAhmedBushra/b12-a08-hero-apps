import React from "react";
import { Link, NavLink } from "react-router";
import iconDownloads from "../assets/icon-downloads.png";
import iconStar from "../assets/icon-ratings.png";

const AppCard = ({ app }) => {
  // const [image, title, downloads, ratingAvg, id] = game;
  return (
    <Link to={`/app/${app.id}`} className="card bg-base-100 w-[320px] h-[320px] shadow-sm hover:scale-105 transition ease-in-out aspect-square">
      <figure className="px-5 pt-5 h-48 overflow-hidden">
        <img className="w-full h-full object-cover rounded-lg"
          src={app.image}
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[20px] ">{app.title}</h2>
        <div className="card-actions justify-between items-center">
          <div className="card-actions flex items-center gap-2 justify-between bg-[#f1f5e8] p-2 rounded">
            <img className="h-5 w-5" src={iconDownloads} alt="" />
            <p className="text-[16px]   text-[#00d390]">{app.downloads}</p>
          </div>
          <div className="card-actions flex items-center gap-2 justify-between bg-[#fff0e1] p-2 rounded">
            <img className="h-5 w-5" src={iconStar} alt="" />
            <p className="text-[16px]  text-[#ff8811]">{app.ratingAvg}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
