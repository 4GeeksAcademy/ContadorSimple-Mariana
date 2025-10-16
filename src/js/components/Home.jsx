import React from "react";
import SecondsCounter from "./SecondsCounter.jsx";

const Home = (props) => {
  return (
    <div className="text-center">
      <SecondsCounter seconds={props.seconds} />
    </div>
  );
};

export default Home;
