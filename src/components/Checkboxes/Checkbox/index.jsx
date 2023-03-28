import React from "react";
import { CheckboxInner, CheckboxLabel, CheckboxWrapper } from "./style";

export const CheckBoxGeneric = ({ checked, text, ...res }) => {
  const toggleCheckbox = (e) => {
    if (e.target.children[0].children[0].style.display === "flex") {
      e.target.children[0].children[0].style.display = "none";
      e.target.children[0].style.opacity = "0.5";
    } else {
      e.target.children[0].children[0].style.display = "flex";
      e.target.children[0].style.opacity = "1";
    }
  };
  return (
    <CheckboxLabel {...res} onClick={toggleCheckbox}>
      <CheckboxWrapper style={checked ? { opacity: "1" } : null} {...res}>
        <CheckboxInner style={checked ? { display: "flex" } : null} {...res} />
      </CheckboxWrapper>
      {text}
    </CheckboxLabel>
  );
};
