import styled from "styled-components";

export const BadgeTitle = styled.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 16px;
  margin-bottom: 20px;
`;

export const BadgeText = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 16px;
  color: var(--color);
  margin-bottom: 40px;
`;

export const BadgeList = styled.ul`
  list-style-type: circle;
  margin-bottom: 50px;
`;

export const StdAlone = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const BadgeESumButton = styled.button`
  background: var(--primary);
  margin-top: 5px;
  margin-right: 5px;
  border: 0;
  width: 25px;
  height: 25px;
  color: #fff;
  cursor: pointer;
  :active {
    transform: translateY(2px);
  }
`;
