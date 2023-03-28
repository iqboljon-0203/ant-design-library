import styled from "styled-components";

const getWSize = ({ size }) => {
  switch (size) {
    case "small":
      return {
        width: "20px",
        height: "20px",
      };
    case "medium":
      return {
        width: "25px",
        height: "25px",
      };
    case "large":
      return {
        width: "30px",
        height: "30px",
      };
    default:
      return {};
  }
};

const getISize = ({ size }) => {
  switch (size) {
    case "small":
      return {
        width: "2px",
        height: "8px",
      };
    case "medium":
      return {
        width: "4px",
        height: "13px",
      };
    case "large":
      return {
        width: "5px",
        height: "17px",
      };
    default:
      return {};
  }
};

export const CheckboxLabel = styled.div`
  user-select: none;
  display: flex;
  align-items: center;
  :hover > div {
    opacity: 1;
    box-shadow: 0 0 2px 0
      ${({ checkColor }) => (checkColor ? checkColor : "var(--primary)")};
  }
`;

export const CheckboxWrapper = styled.div`
  pointer-events: none;
  width: 25px;
  height: 25px;
  margin: 10px;
  opacity: 0.5;
  transition: opacity 0.3s ease;
  border: 1px solid
    ${({ checkColor }) => (checkColor ? checkColor : "var(--info)")};
  border-radius: 4px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  ${getWSize}
`;

export const CheckboxInner = styled.div`
  pointer-events: none;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background-color: ${({ checkColor }) =>
    checkColor ? checkColor : "var(--primary)"};
  position: relative;
  display: none;
  align-items: center;
  justify-content: center;
  ::before {
    content: "";
    pointer-events: none;
    width: 5px;
    height: 17px;
    background-color: transparent;
    border: 3px solid transparent;
    border-right-color: #fff;
    border-bottom-color: #fff;
    position: absolute;
    top: 0;
    transform: rotate(45deg);
    ${getISize}
  }
`;
