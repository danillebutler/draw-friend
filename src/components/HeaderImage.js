import React from 'react';
import './HeaderImage.css'; // vamos criar esse CSS separado


const HeaderImage = () => {
  return (
    <img 
      className="page__image" 
      src= "./assets/imagem-presente.png"
      alt="Imagem de um presente"
    />
  );
};

export default HeaderImage;
