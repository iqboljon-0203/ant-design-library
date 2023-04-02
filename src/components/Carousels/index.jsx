import React from "react";
import { useRef } from "react";
import "./style.css"

export const Carousel = () => {
const elSlide = useRef();

const prevBtn = document.querySelector(".prev_btn");
const nextBtn = document.querySelector(".next_btn");

let shown = 1;

const slideFunc = () => {
  if (shown < 1) {
    shown = elSlide.length;
  }
  if (shown > elSlide.length) {
    shown = 1;
  }
  elSlide.forEach((el) => {
    el.style.display = "none";
  });
  elSlide[shown - 1].style.display = "flex";
};

slideFunc();

prevBtn.onclick = () => {
  shown -= 1;
  slideFunc();
};

nextBtn.onclick = () => {
  shown += 1;
  slideFunc();
};

  return (
    <div className="slide_wrapper">

    <div ref={elSlide} className="slide slide_jsinfo">
        <h1 className="slide_title">Samarkand</h1>
        <p className="slide_text">Samarkand also known as Samarqand, is a city in southeastern Uzbekistan and among the oldest continuously inhabited cities in Central Asia.</p>
        <div className="slide_badge">samarkand</div>
    </div>

    {console.log(elSlide)}
    <div ref={elSlide} className="slide slide_freecodecamp">
        <h1 className="slide_title">Andijan</h1>
        <p className="slide_text">Andijan is one of the oldest cities in the Fergana Valley. In some parts of the city, archeologists have found items dating back to the 7th and 8th centuries.</p>
        <div className="slide_badge">andijan</div>
    </div>

    <div ref={elSlide} className="slide slide_w3schools">
        <h1 className="slide_title">Tashkent</h1>
        <p className="slide_text">Tashkent is the capital of and the most cosmopolitan city in Uzbekistan. It was noted for its tree-lined streets, numerous fountains, and pleasant parks.</p>
        <div className="slide_badge">tashkent</div>
    </div>

    <div ref={elSlide} className="slide slide_sololearn">
        <h1 className="slide_title">Bukhara</h1>
        <p className="slide_text">Bukhara is the seventh-largest city in Uzbekistan, with a population of 280,187 as of 1 January 2020, and the capital of Bukhara Region.</p>
        <div className="slide_badge">bukhara</div>
    </div>

    <button className="prev_btn"></button>
    <button className="next_btn"></button>
  </div>
  );
};

