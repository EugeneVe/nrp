import React from "react";
import wallsxxx from "../json/wallsxxx.json";
import hashcode from "../json/hashcode.json";
import { Burger } from "../Components/Navbar";

// Set the wallpaper from array

function wallapperChanging() {
  let countLines = Object.keys(wallsxxx).length; //count lines in json array
  let counter = [1];
  return function () {
    if (counter >= countLines) {
      counter = 0;
    }
    return counter++;
  };
}
let changeThisWall = wallapperChanging();

const getWall = () => wallsxxx[changeThisWall()];

const changeWall = () => {
  let wallUrl = "--mainblockbg";
  document.documentElement.style.setProperty(wallUrl, getWall());
};

const show1 = () => (document.getElementById("secret").style.display = "none");
const show2 = () =>
  (document.getElementById("navbar__content").style.cssText =
    "display: block; height: 40px; width: 40px;");
const Password = () => {
  const passwordRequest = window.prompt("Please enter password");
  if (passwordRequest === hashcode) {
    show2();
    show1();
    changeWall();
  }
};
const Wallnextxxx = () => (
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

export default Wallnextxxx;
