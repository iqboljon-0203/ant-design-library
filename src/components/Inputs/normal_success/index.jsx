import React from "react";
import { NormalSuccessInput } from "./style";

export const NormalSuccess = ({ placeholder, ...res }) => {
  return (
    <NormalSuccessInput placeholder={placeholder} {...res}></NormalSuccessInput>
  );
};
