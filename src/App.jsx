import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      {/* your routes/components */}
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar />
    </>
  );
}

export default App;
