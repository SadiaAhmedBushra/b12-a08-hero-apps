import React, { useEffect, useState } from "react";
import iconDownloads from "../assets/icon-downloads.png";
import iconStar from "../assets/icon-ratings.png";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("installedApps"));
    if (savedList) {
      setInstalledApps(savedList);
    }
  }, []);

  const sortedItems = (() => {
    if (sortOrder === "asc") {
      return [...installedApps.sort((a, b) => a.downloads - b.downloads)];
    } else if (sortOrder === "desc") {
      return [...installedApps.sort((a, b) => b.downloads - a.downloads)];
    } else {
      return installedApps;
    }
  })();


  const handleUninstall = (id) => {
    const existingList = JSON.parse(localStorage.getItem("installedApps"));
    let updatedList = existingList.filter((p) => p.id !== id);

    setInstalledApps(updatedList)
    localStorage.setItem("installedApps", JSON.stringify(updatedList));
  };
  return (
    <div className="w-11/12 mx-auto mt-10 lg:mt-20">
      <h1 className="text-[34px] lg:text-[48px] font-bold text-center my-5">
        Your Installed Apps
      </h1>
      <p className="text-[20px] text-[#627382] text-center mb-5">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="flex lg:flex-row flex-col-reverse gap-5 justify-between items-center">
        <h1 className="font-bold text-[24px]">
          ({sortedItems.length}) applications found
        </h1>

        <label className="form-control max-w-xs w-full">
          <select
            className="select select-bordered"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            name=""
            id=""
          >
            <option value="none">Sort By</option>
            <option value="asc">Low-&gt;High</option>
            <option value="desc">High-&gt;Low</option>
          </select>
        </label>
      </div>

      {sortedItems.map((a) => (
        <div className="w-full mx-auto mt-5">
          <div key={a.id} className="my-3 shadow-sm rounded-lg w-full">
            <div className="flex flex-row gap-1 items-center justify-between p-3 ">
              <div className="flex flex-row items-center lg:items-start justify-start gap-3">
                <img className="w-14 h-12 shadow-sm" src={a.image} alt="" />

                <div className="flex flex-col justify-start gap-1">
                  <h2 className="text-[20px] font-bold">{a.title}</h2>
                  <div className="flex flex-row gap-3 justify-between items-center">
                    <div className="flex flex-row gap-1.5  justify-between items-center">
                      <img className="w-3 h-3" src={iconDownloads} alt="" />
                      <p className="text-[#00d390] text-xs">{a.downloads}</p>
                    </div>

                    <div className="flex flex-row gap-1.5 justify-between items-center">
                      <img className="w-3 h-3" src={iconStar} alt="" />
                      <p className="text-[#ff8811] text-xs">{a.ratingAvg}</p>
                    </div>

                    <div>
                      <p className="text-[#627382] text-xs">
                        {a.size} <span> MB</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <button onClick={()=>handleUninstall(a.id)} className="bg-[#00d390] text-white font-semibold p-2 rounded-lg">
                Uninstall
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Installation;
