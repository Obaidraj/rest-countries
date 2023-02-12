import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Body from "../components/home/Body";
import Heaader from "../components/home/Heaader";
import { colorMode } from "../features/darkModeSlice";
import { styleForDarkModeBody, styleForLightModeBody } from "../utils/common";

const Home = () => {
  const mode = useSelector(colorMode);

  return (
    <div
      style={mode === "light" ? styleForLightModeBody : styleForDarkModeBody}
      className="home"
    >
      <Heaader />
      <Body />
    </div>
  );
};

export default Home;
