import styled from "styled-components";
import { Link } from "react-router-dom";

import AntDicon from "../../assets/icons/antD.png";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  background-image: url("${AntDicon}");
  background-repeat: no-repeat;
  background-position: right 25px bottom 25px;
  background-size: 60px 60px;
`;

export { Container };

export const ComponentsWrapper = styled.div`
  width: 100%;
  margin: 20px;
  padding: 20px;
  border-radius: 4px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const PathLink = styled(Link)`
  width: 190px;
  height: 75px;
  font-size: 20px;
  border-radius: 20px;
  display: flex;
  margin: 5px;
  align-items: center;
  justify-content: center;
  color: #fff;
  user-select: none;
  text-decoration: none;
  transition: opacity 0.2s ease, background-color 0.2s ease;
  background-color: #7DBCEAFF;
  box-shadow: 0px 0px 5px 0px #f7505eff;
  :hover {
    background-color: #EAB069FF;
  }
  :active {
    transform: translateY(2px);
    opacity: 0.8;
  }
`;
