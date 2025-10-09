import React from "react";
import { useRouteError } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import errorPageImg from "../assets/error-404.png"

const ErrorPage = () => {
  const error = useRouteError();
  return(
    <>
    <Navbar></Navbar>
    <div className="w-2/5 mt-10 mx-auto border gradient-border">
      <p className="text-center my-20 text-4xl gradient-text font-bold">Oops!</p>
      <img className="mx-auto mt-20" src={errorPageImg} alt="" />
      <h1 className="text-center my-20 text-4xl">Page Not Found!</h1>
      <p className="text-center my-20 text-2xl">{error.message}</p>
      </div>
    <Footer></Footer>
  </>
  )
  
};

export default ErrorPage;
