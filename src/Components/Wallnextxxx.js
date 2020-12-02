import React from "react";
import wallsxxx from "../json/wallsxxx.json";
import hashcode from "../json/hashcode.json";

// Set the wallpaper from array
let counter = [];
const wallUrl = "--mainblockbg";
const countLines = Object.keys(wallsxxx).length; //count lines in json
const countWallxxx = () => {
  if (counter >= countLines) {
    counter = 0;
  }
  return counter++;
};
const getWallxxx = () => wallsxxx[countWallxxx()];
const changeWallxxx = () => document.documentElement.style.setProperty(wallUrl, getWallxxx());
const show1 = () => (document.getElementById("secret").style.display = "none");
const show2 = () => (document.getElementById("navbar__content").style.cssText = "display: block; height: 40px; width: 40px;");
const Password = () => {
  const passwordRequest = window.prompt("Please enter password");
  if (passwordRequest === hashcode) {
    show2();
    show1();
    changeWallxxx();
  }
};
const Wallnextxxx = () => (
  <>
    {/* <button type="radio" name="tab" value="igotnone" onClick={show1}>None</button> */}
    <span id="navbar__content" onClick={changeWallxxx}></span>
    <button id="secret" className="secret" onClick={Password}></button>
  </>
);

export default Wallnextxxx;
