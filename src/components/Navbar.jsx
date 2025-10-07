import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import gitLogo from "../assets/gitLogo.png";

const Navbar = () => {
  return (
    <div className="w-full mt-5 lg:h-16 flex justify-between items-center shadow-sm">

            <Link to="/" className="flex justify-between items-center gap-3">
        <img className="lg:ml-15 ml-2 w-10 h-10" src={logo} alt="" />
        <h1 className="text-xl font-bold gradient-text">HERO.IO</h1>
      </Link>

      <div className="">
        <ul className=" flex flex-col lg:flex-row lg:justify-between items-center lg:gap-10 font-semibold">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "gradient-text border-b-2 gradient-border"
                  : "hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:bg-clip-text hover:text-transparent"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                isActive
                  ? "gradient-text border-b-2 gradient-border"
                  : "hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:bg-clip-text hover:text-transparent"
              }
            >
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/installation"
              className={({ isActive }) =>
                isActive
                  ? "gradient-text border-b-2 gradient-border"
                  : "hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:bg-clip-text hover:text-transparent"
              }
            >
              Installation
            </NavLink>
          </li>
        </ul>
        </div>
      



      <div className="gradient-bg lg:mr-15 mr-2 rounded-md hover:bg-white">
        <button>
          <a
            className="py-2 px-3 flex justify-between items-center gap-1 hover:p-4"
            href="https://github.com/SadiaAhmedBushra"
            target="_blank"
          >
            <img src={gitLogo} alt="" />
            <span className="text-white font-semibold">Contribute</span>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
