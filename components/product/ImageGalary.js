import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function ImageGalary(props) {
  return (
    <main>
      <div className="bg-white my-7 border-2 rounded-sm items-center justify-center">
        <div>
          <Carousel infiniteLoop={1 === 1} autoPlay={1 === 1}>
            <div className=" items-center justify-center">
              <img src={props.image} alt="image1" />
            </div>
          </Carousel>
        </div>
      </div>
    </main>
  );
}

export default ImageGalary;
