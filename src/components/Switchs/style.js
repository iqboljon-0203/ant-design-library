import styled from "styled-components";

export const SwitchTitle = styled.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 16px;
  margin-bottom: 20px;
`;

export const SwitchText = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 16px;
  color: var(--color);
  margin-bottom: 40px;
`;

export const SwitchList = styled.ul`
  list-style-type: circle;
  margin-bottom: 50px;
`;

export const DisabledBtn = styled.button`
  padding: 5px 10px;
  font-size: 20px;
  color: #fff;
  background-color: blue;
  cursor: pointer;
  border: 0;
  
  border-radius: 4px;
  :active {
    transform: translateY(2px);
  }
`;
