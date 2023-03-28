import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: var(--border);
  transition: box-shadow 0.3s ease;
  border-radius: 4px;
  :hover {
    box-shadow: var(--shadow);
    cursor: pointer;
  }
`;

export const Header = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  padding: 15px;
`;

export const Body = styled.fieldset`
  border: var(--border);
  border-left: 0;
  border-right: 0;
  padding: 15px;
`;

export const Footer = styled.fieldset`
  border: 0;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  display: inline-block;
  width: 20px;
  margin-right: 5px;
  margin-left: 5px;
  transition: opacity 0.3s ease;
  opacity: 0.5;
  :hover {
    opacity: 1;
  }
`;

export { Container };
