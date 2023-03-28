import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const checkPx = (type) => {
  return `${parseFloat(type)}px`;
};

const getSize = ({ size }) => {
  size = `${size}`.toLowerCase();
  switch (size) {
    case "small":
      return "16px";
    case "medium":
      return "18px";
    case "large":
      return "20px";
    default:
      return "16px";
  }
};

const getColor = ({ type }) => {
  type = `${type}`.toLowerCase();
  switch (type) {
    case "primary":
      return {
        color: "var(--primaryColor)",
        background: "var(--primaryBgColor)",
      };
    case "dashed":
      return {
        color: "var(--dark)",
        background: "var(--primaryColor)",
        border: "var(--borderDashed)",
      };
    case "danger":
      return {
        color: "var(--white)",
        background: "var(--danger)",
        border: "var(--dangerBorder)",
      };
    case "warning":
      return {
        color: "var(--white)",
        background: "var(--warning)",
        border: "none",
      };
    case "secondary":
      return {
        color: "var(--white)",
        background: "var(--secondary)",
        border: "none",
      };
    case "info":
      return {
        color: "var(--white)",
        background: "var(--info)",
        border: "none",
      };
    case "link":
      return {
        color: "var(--primary)",
        background: "var(--white)",
        border: "none",
      };
    default:
      return {};
  }
};

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${getSize};
  width: ${({ width }) => (width ? checkPx(width) : "125px")};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? checkPx(borderRadius) : "4px"};
  border: ${({ border }) => (border ? border : "var(--border)")};
  height: ${({ height }) => (height ? checkPx(height) : "36px")};
  ${getColor}
  cursor: pointer;
  :active {
    transform: translateY(2px);
  }
  :focus {
    & img {
      display: block;
      animation: ${({ type }) => (type !== "info" ? rotate : null)} 2s linear
        infinite;
    }
    opacity: 0.8;
  }
`;

export const LoadImage = styled.img`
  width: 20px;
  margin-right: 10px;
  display: none;
`;
