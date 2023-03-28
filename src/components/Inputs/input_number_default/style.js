import styled from "styled-components";

const getColor = ({ inputType }) => {
  switch (inputType) {
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
const getBgColor = ({ bgColor }) => {
  switch (bgColor) {
    case "success":
      return {
        color: "var(--success)",
        border: "1px solid var(--success)",
        "::placeholder": {
          color: "var(--success)",
        },
        backgroundColor: "#E3F7ECFF",
      };
    case "danger":
      return {
        color: "var(--danger)",
        border: "1px solid var(--danger)",
        "::placeholder": {
          color: "var(--danger)",
        },
        backgroundColor: "#FFE9EDFF",
      };
    case "default":
      return {
        color: "#969294FF",
        border: "1px solid #969294FF",
        "::placeholder": {
          color: "#969294FF",
        },
        backgroundColor: "#F5F5F5FF",
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

// const getBtnBg = ({ btnBg }) => {
//   switch (btnBg) {
//     case "success":
//       return {
//         backgroundColor: "#E3F7ECFF",
//       };
//     case "default":
//       return {
//         backgroundColor: "#F5F5F5FF",
//       };
//     case "danger":
//       return {
//         backgroundColor: "#FFF3F5FF",
//       };

//     default: {
//     }
//   }
// };

export const InputNumberWrapper = styled.input`
  background-color: #fff;
  ${getColor}
  ${getSize}
  ${getBgColor}
  width: 100%;
  border-radius: 4px;
  text-align: left;
  padding-left: ${({ left }) => (left ? "40px" : null)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : null)};
`;

export const PasswordInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;
