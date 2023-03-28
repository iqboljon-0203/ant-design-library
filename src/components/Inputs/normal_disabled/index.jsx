import React from "react";
import { NormalDisabledInput } from "./style";

export const NormalDisabled = ({ disabled, placeholder, ...res }) => {
  return (
    <NormalDisabledInput
      disabled={disabled}
      placeholder={placeholder}
      {...res}
    ></NormalDisabledInput>
  );
};
