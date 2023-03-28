import React from "react";
import Card from "../Card";
import { Container, Wrapper } from "./style";
import Button from "./Button";
import LoadImg from "../../assets/icons/loader.png";
import { LoadImage } from "./Button/style";
import DownloadImg from "../../assets/icons/btn_download.svg";
import SearchImg from "../../assets/icons/btn_search.svg";

const Buttons = () => {
  return (
    <Wrapper>
      <Container>
        <Card
          type="Loading buttons"
          desc={
            "A loading indicator can be added to a button by setting the loading property on the Button."
          }
        >
          <Button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            type="warning"
          >
            <LoadImage src={LoadImg} alt="img" /> Click me
          </Button>
          <Button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            width="110px"
            type="warning"
          >
            <LoadImage src={LoadImg} alt="img" /> Click me
          </Button>
          <Button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            width="small"
            type="warning"
          >
            <LoadImage src={LoadImg} alt="img" />
            Click me
          </Button>
        </Card>
        <Card type="Block" desc={"Block Button"}>
          <Button style={{ width: "100%" }} type="warning">
            Warning button
          </Button>
          <Button style={{ width: "100%" }} type="secondary">
            Secondary button
          </Button>
          <Button style={{ width: "100%" }} type="primary">
            Primary button
          </Button>
          <Button style={{ width: "100%" }} type="danger">
            Danger button
          </Button>
          <Button style={{ width: "100%" }} type="info">
            Info button
          </Button>
        </Card>
        <Card type="Primary" desc={"Primary Button"}>
          <Button type="primary">Primary</Button>
          <Button type="link">Link</Button>
          <Button type="warning">Warning</Button>
          <Button type="danger">Danger</Button>
          <Button type="info">Info</Button>
        </Card>
      </Container>
      <Container>
        <Card type="Dashed" desc={"Dashed Button"}>
          <Button type="dashed">Dashed</Button>
          <Button
            style={{ borderColor: "var(--danger)", color: "var(--danger)" }}
            type="dashed"
          >
            Danger
          </Button>
          <Button
            style={{ borderColor: "var(--info)", color: "var(--info)" }}
            type="dashed"
          >
            Info
          </Button>
          <Button
            style={{ borderColor: "var(--warning)", color: "var(--warning)" }}
            type="dashed"
          >
            Warning
          </Button>
        </Card>
        <Card
          type="Download Button"
          desc={
            "Ant Design supports a Ant Design supports a default button size as well as a large and small size."
          }
        >
          <Button type="info">
            <img
              style={{
                width: "15px",
                filter: `grayscale(0) invert(1)`,
                marginRight: "10px",
              }}
              src={DownloadImg}
              alt="img"
            />
            Download
          </Button>
          <Button
            style={{ fontSize: "0", borderRadius: "50%" }}
            width="40px"
            height="40px"
            type="info"
          >
            <img
              style={{
                width: "15px",
                filter: `grayscale(0) invert(1)`,
                marginRight: "0",
              }}
              src={DownloadImg}
              alt="img"
            />
            Download
          </Button>
          <Button
            style={{ fontSize: "0", borderRadius: "15px" }}
            width="40px"
            height="40px"
            type="info"
          >
            <img
              style={{
                width: "15px",
                filter: `grayscale(0) invert(1)`,
                marginRight: "0",
              }}
              src={DownloadImg}
              alt="img"
            />
            Download
          </Button>
          <Button style={{ fontSize: "0" }} width="50px" type="info">
            <img
              style={{
                width: "15px",
                filter: `grayscale(0) invert(1)`,
                marginRight: "0",
              }}
              src={DownloadImg}
              alt="img"
            />
            Download
          </Button>
        </Card>
        <Card
          type="Search Button"
          desc={
            "Ant Design supports a deAnt Design supports a default button size as well as a large and small size."
          }
        >
          <Button type="info">
            <img
              style={{
                width: "20px",
                filter: `grayscale(0) invert(1)`,
                marginRight: "10px",
              }}
              src={SearchImg}
              alt="img"
            />
            Search
          </Button>
          <Button
            style={{ fontSize: "0", borderRadius: "50%" }}
            width="40px"
            height="40px"
            type="info"
          >
            <img
              style={{
                width: "15px",
                filter: `grayscale(0) invert(1)`,
                marginRight: "0",
              }}
              src={SearchImg}
              alt="img"
            />
            Download
          </Button>
          <Button
            style={{ fontSize: "0", borderRadius: "15px" }}
            width="40px"
            height="40px"
            type="info"
          >
            <img
              style={{
                width: "15px",
                filter: `grayscale(0) invert(1)`,
                marginRight: "0",
              }}
              src={SearchImg}
              alt="img"
            />
            Download
          </Button>
          <Button style={{ fontSize: "0" }} width="50px" type="info">
            <img
              style={{
                width: "15px",
                filter: `grayscale(0) invert(1)`,
                marginRight: "0",
              }}
              src={SearchImg}
              alt="img"
            />
            Download
          </Button>
        </Card>
      </Container>
    </Wrapper>
  );
};

export default Buttons;
