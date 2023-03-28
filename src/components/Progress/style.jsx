import styled from "styled-components";

export const ProgressTitle = styled.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 16px;
  margin-bottom: 20px;
`;

export const ProgressText = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 16px;
  color: var(--color);
  margin-bottom: 40px;
`;

export const ProgressList = styled.ul`
  list-style-type: circle;
  margin-bottom: 50px;
`;

export const BasicWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

export const BtnsWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
`;

export const PlusBtn = styled.button`
  width: 80px;
  height: 25px;
  background-color: var(--info);
  border: 0;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  :active {
    transform: translateY(2px);
  }
  :hover {
    box-shadow: 0 0 2px 0 var(--info);
  }
`;

export const MinusBtn = styled.button`
  width: 80px;
  height: 25px;
  background-color: var(--dangerColor);
  border: 0;
  border-radius: 4px;
  margin-left: 20px;
  color: #fff;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  :active {
    transform: translateY(2px);
  }
  :hover {
    box-shadow: 0 0 2px 0 var(--dangerColor);
  }
`;
