import styled from "styled-components";
import NotFoundImg from "../../assets/img/not_found.jpg";

export const NotFoundPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  font-size: 16px;
`;

export const NotFoundPageImg = styled.div`
  width: 800px;
  height: 460px;
  background-image: url("${NotFoundImg}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;
