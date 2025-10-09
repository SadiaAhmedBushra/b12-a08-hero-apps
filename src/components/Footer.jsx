import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal bg-[#001931] text-white mt-20 p-10">
      <div className="w-11/12 mx-auto flex flex-col justify-between items-center gap-5 my-5">
        <div className="flex flex-col lg:flex-row justify-between items-center">
         
          <div className="lg:w-2/3 flex flex-col items-start gap-3">
            <h1 className="text-3xl">About Us</h1>
            <p className="text-justify">
              GameVault is a leading platform dedicated to bringing the best
              gaming experiences to players worldwide. We specialize in
              discovering, reviewing, and sharing top-quality games for all
              types of gamers. Our team is passionate about gaming and committed
              to providing accurate insights and recommendations.We focus on
              fostering a vibrant community where players can connect, learn,
              and grow together. At GameVault, our mission is to make gaming
              enjoyable, accessible, and engaging for everyone.
            </p>
            <nav>
              <div className="flex flex-row gap-4 mt-5">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </nav>
          </div>

          <nav className="flex flex-col gap-4">
            <div className="flex flex-row gap-2 items-center">
              <IoCallOutline />
              <p className="link link-hover">+8803463467888</p>
            </div>

            <div className="flex flex-row gap-2 items-center">
              <IoLocationOutline />
              <p className="link link-hover">Dhaka, Bangladesh</p>
            </div>

            <div className="flex flex-row gap-2 items-center">
              <HiOutlineMail />

              <p className="link link-hover">gamevault@company.com</p>
            </div>
          </nav>
        </div>

        <aside>
          <p className="text-center">
            Copyright © {new Date().getFullYear()} - All right reserved by
            GameVault Ltd
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
