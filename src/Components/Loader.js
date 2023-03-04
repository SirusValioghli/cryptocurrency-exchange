import React from "react";

//GIF
import spinner from "../gif/spinner.gif";

const Loader = () => {
  return (
    <div>
      <div>
        <img src={spinner} alt="loading" />
        <p>LOADING...</p>
      </div>
    </div>
  );
};

export default Loader;
