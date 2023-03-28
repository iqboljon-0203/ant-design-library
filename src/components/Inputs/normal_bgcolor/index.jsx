import React from "react";
import { NormalBgColorInput } from "./style";

export const NormalBgColor = ({ disabled, placeholder, ...res }) => {
  return (
    <NormalBgColorInput
      disabled={disabled}
      placeholder={placeholder}
      {...res}
    ></NormalBgColorInput>
  );
};
