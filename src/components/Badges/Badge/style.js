import styled from "styled-components";

const getSize = ({ size }) => {
  switch (size) {
    case "small":
      return {
        minWidth: "10px",
        height: "10px",
        borderRadius: "50%",
      };
    case "medium":
      return {
        minWidth: "15px",
        height: "15px",
        borderRadius: "50%",
      };
    case "large":
      return {
        minWidth: "20px",
        height: "20px",
        borderRadius: "50%",
      };

    default: {
    }
  }
};

export const BadgeWrapper = styled.div`
  width: ${({ stdAlone }) => (stdAlone ? "0" : "40px")};
  height: ${({ stdAlone }) => (stdAlone ? "0" : "40px")};
  background-color: #eeeeeeff;
  position: relative;
  margin-right: auto;
`;

export const BadgeIndicator = styled.div`
  min-width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${({ icon, bgColor }) =>
    icon ? null : bgColor ? bgColor : "#ff4d4fff"};
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 14px;
  padding: ${({ icon }) => (icon ? null : "6px")};
  top: -8px;
  right: -8px;
  display: ${({ badge }) => (badge ? "null" : "none")};
  & img {
    width: 100%;
    height: 100%;
  }
  ${getSize}
`;
