import React from "react";
import { CircularInner, CircularWrapper } from "./style";

export const CircularProgress = ({ info, ...res }) => {
  return (
    <CircularWrapper {...res} info={info}>
      <CircularInner {...res} info={info}>
        {info ? info : null}%
      </CircularInner>
    </CircularWrapper>
  );
};
