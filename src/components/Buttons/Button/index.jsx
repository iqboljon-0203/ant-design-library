import React from "react";
import { Container } from "./style";

const NormalButton = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default NormalButton;
