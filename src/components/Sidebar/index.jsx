import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { sidebar } from "../../utils/sidebar";
import { Body, Container, Link, Wrapper } from "./style";

export const Navbar = () => {
  const location = useLocation();
  return (
    <Wrapper>
      <Container>
        {sidebar.map((value) => (
          <Link key={value.id} to={value.path}>
            <img
              style={{ width: "15px", marginRight: "10px" }}
              src={value.fulfilled ? value.imgCheck : value.imgHour}
              alt="img"
            />
            {value.title}
          </Link>
        ))}
      </Container>
      <Body
        style={location.pathname === "/components" ? { display: "none" } : null}
      >
        <Outlet />
      </Body>
    </Wrapper>
  );
};

export default Navbar;
