import React from "react";
import { Body, Container, Footer, FooterLink, Header } from "./style";

import TgImg from "../../assets/icons/f_tg.svg";
import YtImg from "../../assets/icons/yt.svg";
import CopyImg from "../../assets/icons/f_copy.svg";
import CodeImg from "../../assets/icons/f_code.svg";

const Card = ({ type = "Unknown", children, desc }) => {
  return (
    <Container>
      <Header>{children}</Header>
      <Body>
        <legend style={{ fontWeight: "bold" }}>{type}</legend>
        {desc}
      </Body>
    </Container>
  );
};

export default Card;
