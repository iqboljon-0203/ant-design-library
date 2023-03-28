import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 25px;
`;

const Container = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: fit-content;
  grid-template-rows: auto;
  width: 100%;
  gap: 25px; */
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 25px;
`;

export { Container };
