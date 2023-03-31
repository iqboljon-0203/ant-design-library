import React from "react";
import { ToolTipButton, ToolTipContent } from "./style";

export const ToolTip = ({ toolBgColor,toolPos, children, ...res }) => {
  return (
    <ToolTipButton {...res}>
      {children}
      <ToolTipContent toolPos={toolPos} toolBgColor={toolBgColor} {...res}>
        {toolBgColor ? toolBgColor : `Content tooltip ${toolPos} `}
      </ToolTipContent>
    </ToolTipButton>
  );
};
