import { Link } from "react-router-dom";
const { default: styled } = require("styled-components");

export const CarouselPageWrapper = styled.div``;

export const CarouselImgsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 35px;
`;

export const CarouselImg = styled.img`
  max-width: 400px;
  border-radius: 4px;
`;

export const CarouselTitle = styled.div`
  font-weight: bold;
  font-size: 25px;
  text-align: center;
  margin-bottom: 35px;
`;

export const PathLink = styled(Link)`
  width: 90px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  margin: 5px;
  align-items: center;
  justify-content: center;
  color: #fff;
  user-select: none;
  text-decoration: none;
  transition: opacity 0.2s ease, background-color 0.2s ease;
  background-color: #227bfeff;
  box-shadow: 0px 0px 5px 0px #f7505eff;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  :hover {
    background-color: #f7505eff;
  }
  :active {
    transform: translateY(2px);
    opacity: 0.8;
  }
`;

export const OrangeSpan = styled.span`
  color: #e96228ff;
`;
export const RedSpan = styled.span`
  color: red;
`;
export const PurpleSpan = styled.span`
  color: purple;
`;
export const YellowSpan = styled.span`
  color: #f0c300ff;
`;
