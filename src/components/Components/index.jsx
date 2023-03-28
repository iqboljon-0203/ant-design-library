import React from "react";
import { Outlet } from "react-router-dom";
import { ComponentsWrapper, Container, PathLink } from "./style";

import { sidebar } from "../../utils/sidebar";

export const Generic = () => {
  return (
    <Container>
      <Outlet />

      <ComponentsWrapper>
        {sidebar.map((v) => (
          <PathLink key={v.id} to={v.path}>
            {v.title}
          </PathLink>
        ))}
      </ComponentsWrapper>
    </Container>
  );
};

export default Generic;
