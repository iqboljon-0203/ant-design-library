import styled from "styled-components";

const getWSize = ({ size }) => {
  switch (size) {
    case "small":
      return {
        width: "100px",
        height: "100px",
      };
    case "medium":
      return {
        width: "150px",
        height: "150px",
      };
    case "large":
      return {
        width: "200px",
        height: "200px",
      };
    default:
      return {};
  }
};

const getISize = ({ size }) => {
  switch (size) {
    case "small":
      return {
        width: "80px",
        height: "80px",
      };
    case "medium":
      return {
        width: "120px",
        height: "120px",
      };
    case "large":
      return {
        width: "160px",
        height: "160px",
      };
    default:
      return {};
  }
};

export const CircularWrapper = styled.div`
  ${getWSize}
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: conic-gradient(
    ${({ info, color }) =>
        info < 30 ? "var(--dangerColor)" : color ? color : "#7d2ae8"}
      ${({ info }) => info * 3.6}deg,
    #ededed 0deg
  );
`;

export const CircularInner = styled.div`
  ${getISize}
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
  color: ${({ info, color }) =>
    info < 30 ? "var(--dangerColor)" : color ? color : "#7d2ae8"};
`;
