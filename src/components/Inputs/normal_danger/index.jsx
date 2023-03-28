import React from "react";
import { NormalDangerInput } from "./style";

export const NormalDanger = ({ placeholder, ...res }) => {
  return (
    <NormalDangerInput placeholder={placeholder} {...res}></NormalDangerInput>
  );
};
