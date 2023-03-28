import styled, { keyframes } from "styled-components";
import LoadImg from "../../../assets/icons/loader.png";
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const getWSize = ({ size }) => {
  switch (size) {
    case "small":
      return {
        width: "26px",
        height: "16px",
      };
    case "medium":
      return {
        width: "36px",
        height: "20px",
      };
    case "large":
      return {
        width: "50px",
        height: "25px",
      };
    default:
      return {};
  }
};

const getISize = ({ size }) => {
  switch (size) {
    case "small":
      return {
        width: "14px",
        height: "14px",
      };
    case "medium":
      return {
        width: "18px",
        height: "18px",
      };
    case "large":
      return {
        width: "23px",
        height: "23px",
      };
    default:
      return {};
  }
};

export const SwitchWrapper = styled.div`
  ${getWSize}
  background-color: purple;
  border-radius: 15px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  position: relative;
  transition: background-color 0.3s ease;
  pointer-events: ${({ load }) => (load ? "none" : null)};
`;

export const SwitchInner = styled.div`
  ${getISize}
  margin: 1px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  pointer-events: none;
  transition: 0.3s ease all;
  padding: 2px;
  opacity: ${({ load }) => (load ? "0.9" : null)};
`;

export const SwitchRightInfo = styled.span`
  color: #fff;
  font-size: ${({ size }) =>
    size === "large" ? "15px" : size === "medium" ? "10px" : "7px"};
  position: absolute;
  right: ${({ size }) =>
    size === "large" ? "6px" : size === "medium" ? "4px" : "3px"};
  pointer-events: none;
  user-select: none;
`;
export const SwitchLeftInfo = styled.span`
  color: #fff;
  font-size: ${({ size }) =>
    size === "large" ? "15px" : size === "medium" ? "10px" : "7px"};
  position: absolute;
  left: ${({ size }) =>
    size === "large" ? "6px" : size === "medium" ? "4px" : "3px"};
  pointer-events: none;
  user-select: none;
`;

export const LoadImage = styled.span`
  background-image: url("${LoadImg}");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 100%;
  display: ${({ load }) => (load === "load" ? "block" : "none")};
  animation: ${({ load }) => (load === "load" ? rotate : null)} 2s linear
    infinite;
  pointer-events: none;
`;
