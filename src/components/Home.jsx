import React from "react";
import Display from "./Display";
import SingleRecipe from "./SingleRecipe";
import "../index.css";
import { GlobelDataContext } from "../context/AppProvider";

const Home = () => {
  const { isLoad } = GlobelDataContext();
  return (
    <div className="home">
      <Display />
      <div className="SingleRecipe_Container">
        {isLoad ?  <div>View recipe Hear</div>  : <SingleRecipe />}
      </div>
    </div>
  );
};

export default Home;
