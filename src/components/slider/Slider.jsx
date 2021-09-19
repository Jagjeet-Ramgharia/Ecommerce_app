import React from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import "./slider.css";

const Slider = () => {
  const handleClick = (e) => {};
  return (
    <div className="slider">
      <div className="arrow left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </div>
      <div className="wrapper">
        <div className="slide">
          <div className="ImgContainer">
            <img
              src="https://media.istockphoto.com/photos/young-womans-fashion-style-young-pretty-fashioned-girl-picture-id1263307689?b=1&k=20&m=1263307689&s=170667a&w=0&h=lhpofBidGM9PsvJ9kgz7uIJ8X0hh3Bjse8t5Erx0Ijw="
              alt=""
              className="brandImg"
            />
          </div>
          <div className="InfoContainer">
            <h1 className="title">Summer sale</h1>
            <p className="desc">
              Don't compromise on style! get flat 30% off for new arrivals
            </p>
            <button className="btn">Shop Now</button>
          </div>
        </div>
        <div className="slide">
          <div className="ImgContainer">
            <img
              src="https://media.istockphoto.com/photos/young-womans-fashion-style-young-pretty-fashioned-girl-picture-id1263307689?b=1&k=20&m=1263307689&s=170667a&w=0&h=lhpofBidGM9PsvJ9kgz7uIJ8X0hh3Bjse8t5Erx0Ijw="
              alt=""
              className="brandImg"
            />
          </div>
          <div className="InfoContainer">
            <h1 className="title">Summer sale</h1>
            <p className="desc">
              Don't compromise on style! get flat 30% off for new arrivals
            </p>
            <button className="btn">Shop Now</button>
          </div>
        </div>
      </div>
      <div className="arrow right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </div>
    </div>
  );
};

export default Slider;
