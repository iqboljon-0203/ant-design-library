import styled from "styled-components";

const getColor = ({ type }) => {
  switch (type) {
    case "success":
      return {
        color: "#b7eb8fff",
        border: "1px solid #b7eb8fff",
      };
    case "error":
      return {
        color: "#FFCCC7FF",
        border: "1px solid #FFCCC7FF",
      };
    case "default":
      return {
        color: "#969294FF",
        border: "1px solid #969294FF",
      };

    default: {
    }
  }
};

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

export const NormalDefaultInpput = styled.input`
  ${getColor}
  ${getSize}
  background-color: #fff;
  width: 100%;
  border-radius: 4px;
  text-align: left;
`;
