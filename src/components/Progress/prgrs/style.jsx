import styled from "styled-components";

const getType = ({ type }) => {
  type = `${type}`.toLowerCase();
  switch (type) {
    case "line":
      return {
        height: "10px",
        width: "100%",
        backgroundColor: "#e0e0deff",
        position: "relative",
        borderRadius: "15px",
      };
    default:
      return {};
  }
};

const getBgColor = ({ bgcolor }) => {
  bgcolor = `${bgcolor}`.toLowerCase();
  switch (bgcolor) {
    case "primary":
      return "var(--primary)";
    case "secondary":
      return "var(--secondary)";
    case "success":
      return "var(--success)";
    case "danger":
      return "var(--danger)";
    case "warning":
      return "var(--warning)";
    case "info":
      return "var(--info)";
    case "light":
      return "var(--light)";
    case "dark":
      return "var(--dark)";
    case "white":
      return "var(--white)";
    default:
      return {};
  }
};

const getSize = ({ size }) => {
  size = `${size}`.toLowerCase();
  switch (size) {
    case "small":
      return {
        width: "50%",
      };
    case "medium":
      return {
        width: "70%",
      };
    case "large":
      return {
        width: "100%",
      };
    default:
      return {};
  }
};

const getProgress = ({ progress }) => {
  progress = `${progress}`.toLowerCase();
  return `${progress}%`;
};

export const ProgressLineWrapper = styled.div`
  ${getType}
  ${getSize}
`;

export const ProgressLineInner = styled.div`
  height: 10px;
  width: ${getProgress};
  background-color: ${getBgColor};
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 15px;
  transition: width 0.3s ease;
`;

export const ProgressMain = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProgressDisplay = styled.span`
  display: inline-block;
  margin-left: 10px;
`;

export const LineBtn = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  transition: color 0.3s ease, background-color 0.3s ease;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  :active {
    transform: translateY(2px);
  }
  :hover {
    background-color: var(--primary);
    color: var(--white);
  }
  :focus {
    border: 1px solid var(--primary);
  }
`;
