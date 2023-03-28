import React from "react";
import { BadgeIndicator, BadgeWrapper } from "./style";

export const BadgeComp = ({ bgColor, icon, count, ...res }) => {
  return (
    <BadgeWrapper {...res}>
      <BadgeIndicator bgColor={bgColor} icon={icon} {...res}>
        {count}
        {icon ? <img src={icon} alt="img" /> : null}
      </BadgeIndicator>
    </BadgeWrapper>
  );
};
