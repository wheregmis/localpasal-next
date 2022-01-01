import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

function BannerCarousel() {
  return (
    <main>
      <div>
        <Carousel infiniteLoop={1 === 1} autoPlay={1 === 1}>
          <div className=" max-h-[69vh] items-center justify-center">
            <img src="/assets/iphone.jpg" alt="image1" />
            <button className="legend">Happy New Year 2022</button>
          </div>
          <div>
            <img src="/assets/localpasal.png" alt="image2" />
            <p className="legend">Image 2</p>
          </div>
          <div>
            <img src="/assets/localpasal.png" alt="image3" />
            <p className="legend">Image 3</p>
          </div>
          <div>
            <img src="/assets/localpasal.png" alt="image4" />
            <p className="legend">Image 4</p>
          </div>
          <div>
            <img src="/assets/localpasal.png" alt="image5" />
            <p className="legend">Image 5</p>
          </div>
        </Carousel>
      </div>
    </main>
  );
}

export default BannerCarousel;
