import React from "react";
import wallsxxx from "json/wallsxxx.json";
import hashcode from "json/hashcode.json";
import { Burger } from "Components/Navbar";

// Set the wallpaper from array

const Wallnextxxx = () => {
  const wallapperChanging = (wallPosition) => {
    const countLines = Object.keys(wallsxxx).length; //count lines in json array
    return function () {
      if (wallPosition >= countLines) {
        wallPosition = 0;
      }
      return (wallPosition += 1);
    };
  };

  const changeThisWall = wallapperChanging(1);

  const getWall = () => wallsxxx[changeThisWall()];

  const changeWall = () => {
    const wallUrl = "--mainblockbg";
    document.documentElement.style.setProperty(wallUrl, getWall());
  };

  const show1 = () => (document.getElementById("secret").style.display = "none");
  const show2 = () =>
    (document.getElementById("navbar__content").style.cssText = "display: block; height: 40px; width: 40px;");
  const Password = () => {
    const passwordRequest = window.prompt("Please enter password");
    if (passwordRequest === hashcode) {
      show2();
      show1();
      changeWall();
    }
  };

  return (
    <>
      <span
        id="navbar__content"
        onClick={() => {
          changeWall();
          Burger();
        }}
      ></span>
      <button id="secret" className="secret" onClick={Password}></button>
    </>
  );
};

export default Wallnextxxx;
