import React from 'react';
import walls from 'json/walls.json';
import { ReactComponent as Next } from 'assests/images/next.svg';

const Wallnext = () => {
  // Set the wallpaper from array
  function wallapperChanging(wallPosition) {
    const countLines = Object.keys(walls).length; //count lines in json array
    return function () {
      if (wallPosition >= countLines) {
        wallPosition = 0;
      }
      return wallPosition++;
    };
  }

  const changeThisWall = wallapperChanging(1);

  const getWall = () => walls[changeThisWall()];

  const changeWall = () => {
    const wallUrl = '--mainblockbg';
    document.documentElement.style.setProperty(wallUrl, getWall());
  };

  return (
    <>
      <div className="switchBg" type="button" onClick={changeWall} title="Next background">
        <Next />
      </div>
    </>
  );
};

export default Wallnext;
