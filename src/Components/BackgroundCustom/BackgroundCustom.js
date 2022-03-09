import React, { useEffect, useState } from 'react';
import { ReactComponent as Bg } from 'assests/images/bg.svg';
import './BackgroundCustom.scss';

const BackgroundCustom = () => {
  const unsplashImg = 'https://source.unsplash.com/1920x1080/?ukraine';
  const [selectedBg, setSelectedBg] = useState(() => localStorage.getItem('recent-image'));

  const loadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setSelectedBg(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const wallUrl = '--mainblockbg';
  useEffect(() => {
    selectedBg?.length > 0 && localStorage.setItem('recent-image', selectedBg);
    localStorage.getItem('recent-image') === null
      ? document.documentElement.style.setProperty(wallUrl, 'url(' + unsplashImg + ')')
      : document.documentElement.style.setProperty(wallUrl, 'url(' + localStorage.getItem('recent-image') + ')');
  }, [selectedBg]);

  return (
    <label htmlFor="bg-select" title="Chose your own background">
      <Bg />
      <input id="bg-select" className="bg-select" type="file" accept="image/*" onChange={loadImage} />
    </label>
  );
};

export default BackgroundCustom;
