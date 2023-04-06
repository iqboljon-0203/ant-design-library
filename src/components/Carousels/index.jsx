import React from "react";
import {
  CarouselImg,
  CarouselImgsWrapper,
  CarouselPageWrapper,
  CarouselTitle,
  OrangeSpan,
  PathLink,
  PurpleSpan,
  RedSpan,
  YellowSpan,
} from "./style";

import CImg1 from "../../assets/img/c_1.jpg";
import CImg2 from "../../assets/img/c_2.jpg";
import CImg3 from "../../assets/img/c_3.jpg";

export const Carousel = () => {
  return (
    <CarouselPageWrapper>
      <CarouselImgsWrapper>
        <CarouselImg src={CImg1} alt="img" />
        <CarouselImg src={CImg2} alt="img" />
        <CarouselImg style={{ marginTop: "25px" }} src={CImg3} alt="img" />
      </CarouselImgsWrapper>
      <CarouselTitle>
        All my sliders are made in pure <OrangeSpan> HTML </OrangeSpan>
        <RedSpan>&</RedSpan> <PurpleSpan> CSS </PurpleSpan> and
        <YellowSpan> JS </YellowSpan> by <OrangeSpan> Yuldashev Iqboljon </OrangeSpan>
      </CarouselTitle>
      <PathLink to={"https://pure-sliders.netlify.app/index.html"}>GO</PathLink>
    </CarouselPageWrapper>
  );
};
