import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  min-width: 300px;
  width: 100%;
  box-shadow: var(--shadow);
  padding: 0 25px;
  gap: 20px;
  padding-top: 25px;
  padding-bottom: 25px;
  overflow-y: scroll;
  .active {
    opacity: 1;
    font-weight: 900;
    color: green;
    padding-left: 25px;
    padding-right: 25px;
    & img {
      display: none;
    }
  }
  &.scroll-close::-webkit-scrollbar {
    width: 0;
  }

  &::-webkit-scrollbar {
    width: 2px;
    border-radius: 25px;
  }

  &::-webkit-scrollbar-thumb {
    /* Foreground */
    background: green;
    border-radius: 25px;
  }

  &::-webkit-scrollbar-track {
    /* Background */
    background: rgba(225, 220, 220, 0.845);
    border-radius: 25px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  height: calc(100vh - var(--navbar-height));
  /* overflow: scroll; */
`;
const Body = styled.div`
  margin: 25px;
  padding: 25px;
  box-shadow: var(--shadow);
  width: 100%;
  max-width: 100%;
  border-radius: 8px;
  overflow-y: auto;
  &.scroll-close::-webkit-scrollbar {
    width: 0;
  }

  &::-webkit-scrollbar {
    width: 2px;
    border-radius: 25px;
  }

  &::-webkit-scrollbar-thumb {
    /* Foreground */
    background: green;
    border-radius: 25px;
  }

  &::-webkit-scrollbar-track {
    /* Background */
    background: rgba(225, 220, 220, 0.845);
    border-radius: 25px;
  }
`;

const Link = styled(NavLink)`
  color: var(--color);
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  width: fit-content;
  opacity: 0.7;
  transition: 0.2s padding ease;
  display: flex;
  align-items: center;
  user-select: none;
  :hover {
    opacity: 1;
  }
`;

export { Container, Wrapper, Body, Link };
