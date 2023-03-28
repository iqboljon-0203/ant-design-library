import styled from "styled-components";

const getSize = ({ size }) => {
  switch (size) {
    case "small":
      return {
        padding: "8px",
        fontSize: "12px",
      };
    case "medium":
      return {
        padding: "10px",
        fontSize: "14px",
      };
    case "large":
      return {
        padding: "12px",
        fontSize: "16px",
      };

    default: {
    }
  }
};

const getToolPosition = ({ toolPos }) => {
  switch (toolPos) {
    case "left":
      return {
        top: "50%",
        left: "-190%",
        transform: "translateY(-50%)",
      };
    case "right":
      return {
        top: "50%",
        right: "-175%",
        transform: "translateY(-50%)",
      };
    case "bottom":
      return {
        bottom: "-110%",
        left: "50%",
        transform: "translateX(-50%)",
      };
    default:
      return {
        top: "-110%",
        left: "50%",
        transform: "translateX(-50%)",
      };
  }
};

const getToolIndicator = ({ toolPos }) => {
  switch (toolPos) {
    case "left":
      return {
        top: "50%",
        right: "-5px",
        transform: "translateY(-50%) rotate(45deg)",
      };
    case "right":
      return {
        top: "50%",
        left: "-5px",
        transform: "translateY(-50%) rotate(45deg)",
      };
    case "bottom":
      return {
        top: "-5px",
        left: "50%",
        transform: "translateX(-50%) rotate(45deg)",
      };
    default:
      return {
        left: "50%",
        bottom: "-5px",
        transform: "translateX(-50%) rotate(45deg)",
      };
  }
};

export const ToolTipButton = styled.button`
  background: none;
  border: none;
  white-space: nowrap;
  cursor: pointer;
  position: relative;
  border-radius: 4px;
  border: ${({ border }) => (border ? "var(--border)" : null)};
  width: ${({ block }) => (block ? "250px" : null)};
  margin: ${({ block }) => (block ? "10px" : null)};
  ${getSize}
  transition: color 0.3s ease, backgroundColor 0.3s ease;
  :hover {
    border-color: var(--info);
    color: var(--info);
  }
  :hover div {
    display: block;
  }
`;

export const ToolTipContent = styled.div`
  display: none;
  white-space: nowrap;
  padding: 5px 5px;
  background-color: ${({ toolBgColor }) =>
    toolBgColor ? toolBgColor : "#000"};
  border-radius: 4px;
  color: #fff;
  position: absolute;
  z-index: 5;
  ${getToolPosition}
  ::before {
    content: "";
    width: 20px;
    height: 20px;
    background-color: ${({ toolBgColor }) =>
      toolBgColor ? toolBgColor : "#000"};
    position: absolute;
    z-index: -1;
    ${getToolIndicator}
  }
`;
