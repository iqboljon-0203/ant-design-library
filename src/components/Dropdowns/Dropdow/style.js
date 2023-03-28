import styled from "styled-components";

export const SelectBtn = styled.button`
  position: relative;
  width: ${({ hover }) => (hover ? null : "100%")};
  height: 50px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 4px;
  background: none;
  text-align: left;
  border-color: ${({ hover }) => (hover ? "var(--info)" : null)};
  color: ${({ hover }) => (hover ? "var(--info)" : null)};
  border: ${({ hover }) => (hover ? "none" : "var(--border)")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: color 0.3s ease, backgroundColor 0.3s ease;
  :hover {
    border-color: ${({ disabled }) => (disabled ? null : "var(--info)")};
    color: ${({ disabled }) => (disabled ? null : "var(--info)")};
  }
  &:focus > span {
    transform: rotate(180deg);
  }
`;

export const SelectImgWrapper = styled.span`
  position: absolute;
  right: 15px;
  display: ${({ hover }) => (hover ? "none" : "inline-block")};
  width: 20px;
  transition: transform 0.3s ease;
  pointer-events: none;
`;

export const SelectDropDownWrapper = styled.div`
  width: 100%;
  position: absolute;
  border-radius: 4px;
  left: 0;
  top: 100%;
  display: none;
  font-size: 14px;
  background-color: #fff;
  z-index: 50;
  box-shadow: var(--shadow);
`;

export const SelectItem = styled.div`
  width: 100%;
  padding: ${({ subOption }) =>
    subOption ? "15px 15px 15px 40px" : "15px 25px"};
  border-radius: 4px;
  display: flex;
  align-items: center;
  background-color: #fff;
  color: ${({ subOption }) => (subOption ? "#676767FF" : "#202020")};
  :hover {
    background-color: ${({ danger, option }) =>
      danger && !option ? "red" : "#f2f2f2"};
    color: ${({ danger, option }) => (danger && !option ? "#fff" : null)};
  }
`;

export const SelectItemSub = styled.div`
  width: 100%;
  padding: ${({ subOption }) =>
    subOption ? "15px 15px 15px 40px" : "15px 25px"};
  border-radius: 4px;
  display: ${({ option }) => (option ? "none" : "flex")};
  align-items: center;
  background-color: #fff;
  color: ${({ subOption }) => (subOption ? "#676767FF" : "#202020")};
  :hover {
    background-color: ${({ danger, option }) =>
      danger && !option ? "red" : "#f2f2f2"};
    color: ${({ danger }) => (danger ? "#fff" : null)};
  }
`;

export const BtnWrapContainer = styled.div`
  width: 100%;
  position: relative;
`;
