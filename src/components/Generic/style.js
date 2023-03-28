import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */
  box-shadow: var(--shadow);
  margin: 25px;
  padding: 25px;
  border-radius: 4px;
  font-size: 20px;
  color: #ee8bfeff;
`;

export const Span = styled.span`
  color: #49c4fdff;
  margin-left: 5px;
`;

export { Container };
