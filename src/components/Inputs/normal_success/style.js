import styled from "styled-components";

const getColor = ({ type }) => {
  switch (type) {
    case "success":
      return {
        color: "var(--success)",
        border: "1px solid var(--success)",
        "::placeholder": {
          color: "var(--success)",
        },
      };
    case "danger":
      return {
        color: "var(--danger)",
        border: "1px solid var(--danger)",
        "::placeholder": {
          color: "var(--danger)",
        },
      };
    case "default":
      return {
        color: "#969294FF",
        border: "1px solid #969294FF",
        "::placeholder": {
          color: "#969294FF",
        },
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

export const NormalSuccessInput = styled.input`
  ${getColor}
  ${getSize}
  background-color: #fff;
  width: 100%;
  border-radius: 4px;
  text-align: left;
`;
