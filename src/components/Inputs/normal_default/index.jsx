import React from "react";
import { NormalDefaultInpput } from "./style";

export const NormalDefault = ({ placeholder, ...res }) => {
  return (
    <NormalDefaultInpput
      placeholder={placeholder}
      {...res}
    ></NormalDefaultInpput>
  );
};
