import styled from "styled-components";

export const TooltipTitle = styled.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 16px;
  margin-bottom: 20px;
`;

export const TooltipText = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 16px;
  color: var(--color);
  margin-bottom: 40px;
`;

export const TooltipList = styled.ul`
  list-style-type: circle;
  margin-bottom: 50px;
`;

export const TooltSizesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const TopTooltipWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-right: auto;
  margin-left: auto;
  & button {
    margin: 5px;
  }
`;

export const MiddleTooltipWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  & button:last-child {
    position: absolute;
    right: 0;
  }
`;
