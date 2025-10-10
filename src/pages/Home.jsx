import React from "react";
import googlePlayLogo from "../assets/googlePlay.png";
import appStoreLogo from "../assets/appStore.png";
import heroImg from "../assets/hero.png";
import { Link, useLoaderData } from "react-router";
import AppCard from "../components/AppCard";
import useApps from "../Hooks/useApps";
import LoadingSpinner from "../components/LoadingSpinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorPage from "./ErrorPage";

const Home = () => {
  // const games = useLoaderData();
  const { apps, error, loading } = useApps();

  if (loading) {
    return <LoadingSpinner count={1} />;
  }

  if (error) {
    return <ErrorPage count={1} />;
  }

  const featuredApps = apps.slice(0, 8);
  return (
    <div className="mb-10">
      <div className="w-11/12 mx-auto text-center mt-10 lg:mt-20 ">
        <h1 className="text-[32px] lg:text-[72px] font-bold leading-[1.2]">
          We Promote <br />
          <span className="gradient-text">Productive</span> Apps
        </h1>
        <p className="w-3/4 mt-5 mx-auto text-[#627382] text-xs lg:text-xl">
          At ProVault, we promote innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to serve you with
          apps that turn your ideas into digital experiences and truly make an
          impact.
        </p>

        <div className="mt-8 flex justify-center items-center gap-5">
          <button className="btn btn-xs sm:btn-sm  lg:btn-lg xl:btn-xl ">
            {" "}
            <a
              className="flex flex-row justify-between items-center gap-2"
              href="https://play.google.com/store/apps?hl=en"
            >
              <img
                className="w-3 h-3 lg:w-7 lg:h-7"
                src={googlePlayLogo}
                alt=""
              />{" "}
              Google Play
            </a>{" "}
          </button>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
            {" "}
            <a
              className="flex flex-row justify-between items-center gap-2"
              href="https://www.apple.com/app-store/"
            >
              <img
                className="w-3 h-3 lg:w-7 lg:h-7"
                src={appStoreLogo}
                alt=""
              />{" "}
              App Store
            </a>{" "}
          </button>
        </div>

        <img
          className="mx-auto w-3/4 lg:w-2/4 mt-8 lg:mt-10"
          src={heroImg}
          alt=""
        />
      </div>

      <div className="w-full mx-auto text-center banner-gradient-bg p-10 lg:p-20">
        <h1 className="lg:w-2/4 mx-auto text-[24px] lg:text-[38px] text-white font-semibold">
          Trusted by Millions, Built for You
        </h1>

        <div className="w-4/5 mx-auto flex flex-col lg:flex-row justify-center items-center gap-10 mt-5 lg:mt-10">
          <div className="text-white flex flex-col justify-center items-center">
            <p className="text-[16px]">Total Downloads</p>
            <h1 className="font-bold text-[25px] lg:text-[61px]">29.6M</h1>
            <p className="text-[16px]">21% more than last month</p>
          </div>

          <div className="text-white flex flex-col justify-center items-center">
            <p className="text-[16px]">Total Reviews</p>
            <h1 className="font-bold text-[25px] lg:text-[61px]">906K</h1>
            <p className="text-[16px]">46% more than last month</p>
          </div>

          <div className="text-white flex flex-col justify-center items-center">
            <p className="text-[16px]">Active Apps</p>
            <h1 className="font-bold text-[25px] lg:text-[61px]">132+</h1>
            <p className="text-[16px]">31 more will Launch</p>
          </div>
        </div>
      </div>

      {/* Trending Apps */}

      <div className="w-11/12 mx-auto text-center mt-10 lg:mt-20 ">
        <h1 className="text-[34px] lg:text-[48px] font-bold">Trending Apps</h1>
        <p className="text-[20px] text-[#627382]">
          Explore All Trending Apps marketed by us
        </p>

        {/* APP CARDS */}

        {loading ? (
          <LoadingSpinner></LoadingSpinner>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-10 justify-items-center">
            {featuredApps.map((app) => (
              <AppCard key={app.id} app={app}></AppCard>
            ))}
          </div>
        )}

        <button className="gradient-bg mt-8 py-3 px-9 lg:mr-15 rounded-md hover:bg-white text-white font-semibold">
          <Link to="/apps">Show All</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
