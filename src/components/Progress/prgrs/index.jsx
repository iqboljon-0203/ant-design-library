import React from "react";
import {
  ProgressDisplay,
  ProgressLineInner,
  ProgressLineWrapper,
  ProgressMain,
} from "./style";

export const ProgressMaker = ({ progress = "30", ...res }) => {
  return (
    <ProgressMain {...res}>
      <ProgressLineWrapper {...res}>
        <ProgressLineInner progress={progress} {...res} />
      </ProgressLineWrapper>
      <ProgressDisplay>{progress ? `${progress}%` : null}</ProgressDisplay>
    </ProgressMain>
  );
};
