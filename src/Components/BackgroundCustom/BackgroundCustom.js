import React, { useEffect, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import { ReactComponent as Bg } from "assests/images/bg.svg";
import { ReactComponent as Loader } from "assests/images/Double Ring-1s-200px.svg";
import { ReactComponent as Remove } from "assests/images/remove.svg";
import "./BackgroundCustom.scss";

const BackgroundCustom = () => {
  const unsplashImg = "https://source.unsplash.com/1920x1080/?ukraine";
  const [selectedBg, setSelectedBg] = useState(() => localStorage.getItem("recent-image"));
  const [loading, setLoading] = useState(false);

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "p6jxeq56");
    setLoading(true);
    const res = await fetch("https://api.cloudinary.com/v1_1/eugeneve/image/upload", {
      method: "POST",
      body: data,
    });
    const file = await res.json();
    setSelectedBg(file.secure_url);
    setLoading(false);
  };

  const removeBg = () => {
    localStorage.removeItem("recent-image");
    document.location.reload();
  };
  const wallUrl = "--mainblockbg";

  useEffect(() => {
    selectedBg?.length > 0 && localStorage.setItem("recent-image", selectedBg);
    localStorage.getItem("recent-image") === null
      ? document.documentElement.style.setProperty(wallUrl, "url(" + unsplashImg + ")")
      : document.documentElement.style.setProperty(wallUrl, "url(" + localStorage.getItem("recent-image") + ")");
  }, [selectedBg]);

  return (
    <>
      <Tooltip
        componentsProps={{
          tooltip: {
            sx: {
              bgcolor: "var(--darkgray)",
              backdropFilter: "blur(10px)",
              borderRadius: "30px",
            },
          },
        }}
        title={
          selectedBg?.length > 0 ? (
            <div className="remove-bg" onClick={removeBg}>
              <button className="remove-bg-btn">
                <Remove />
              </button>
            </div>
          ) : (
            <span className="tooltip-own-bg">Select own background</span>
          )
        }
      >
        <label htmlFor="bg-select">
          <Bg />
          <input id="bg-select" className="bg-select" type="file" accept="image/*" onChange={uploadImage} />
        </label>
      </Tooltip>
      {loading && (
        <div className="loader-wrapper">
          <h2>
            Image is Loading ... <Loader />
          </h2>
        </div>
      )}
    </>
  );
};

export default BackgroundCustom;
