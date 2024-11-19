import React from "react";
import "./card.css";
import Bedding from "./../../assets/Bedding.jpg";
import HomeStorage from "./../../assets/HomeStorage.jpg";
import HomeDecor from "./../../assets/HomeDecor.jpg";
import CleaningTool from "./../../assets/CleaningTool.jpg";


const Card = () => {
  return (
    <div className="card-container">
      <h1 className="card-heading">Shop for your home essentials</h1>
      <div className="card-item-container">
        <div className="card-img-container">
          <img src={Bedding} alt="Bedding" className="card-img"/>
          <p className="card-title">Bedding</p>
        </div>

        <div className="card-img-container">
          <img src={HomeDecor} alt="HomeDecor" className="card-img"/>
          <p className="card-title">HomeDecor</p>
        </div>

        <div className="card-img-container">
          <img src={HomeStorage} alt="HomeStorage" className="card-img"/>
          <p className="card-title">HomeStorage</p>
        </div>

        <div className="card-img-container">
          <img src={CleaningTool} alt="CleaningTool" className="card-img"/>
          <p className="card-title">CleaningTool</p>
        </div>
      </div>
      <a href="" className="more-options">Discover more in Home</a>
    </div>
  );
};

export default Card;
