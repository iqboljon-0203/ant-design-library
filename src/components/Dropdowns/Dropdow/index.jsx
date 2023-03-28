import React from "react";
import {
  BtnWrapContainer,
  SelectBtn,
  SelectDropDownWrapper,
  SelectImgWrapper,
  SelectItem,
  SelectItemSub,
} from "./style";

export class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      hoverVal: "H",
    };
  }

  render() {
    const { option, children, ...res } = this.props;

    const setSelected = (e) => {
      e.target.parentElement.style.display = "none";
      e.target.parentElement.parentElement.children[0].children[1].style.transform =
        "rotate(0)";

      e.target.parentElement.parentElement.children[0].children[0].textContent =
        e.target.textContent;
    };

    const btnToggle = (e) => {
      if (e.target.nextElementSibling.style.display === "block") {
        e.target.nextElementSibling.style.display = "none";
        e.target.children[1].style.transform = "rotate(0)";
      } else {
        e.target.nextElementSibling.style.display = "block";
        e.target.children[1].style.transform = "rotate(180deg)";
      }
    };

    const hoverOut = (e) => {
      e.target.parentElement.style.display = "none";
      e.target.parentElement.parentElement.children[0].children[1].style.transform =
        "rotate(0)";
    };

    return (
      <BtnWrapContainer>
        <SelectBtn onClick={btnToggle} option={option} {...res}>
          <span style={{ pointerEvents: "none" }}>
            {children ? children : "Select"}
          </span>
          <SelectImgWrapper {...res}>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              id="KeyboardArrowDownIcon"
              className="StyledIconBase-ea9ulj-0 iKhrnw"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
            </svg>
          </SelectImgWrapper>
        </SelectBtn>
        <SelectDropDownWrapper onMouseLeave={hoverOut}>
          <SelectItem onClick={setSelected}>
            {option ? "Option 1" : "Option 1 option 1 to see"}
          </SelectItem>
          <SelectItem onClick={setSelected}>Option 2</SelectItem>
          <SelectItemSub onClick={setSelected} option={option} subOption>
            Sub Option 2
          </SelectItemSub>
          <SelectItemSub danger option={option} subOption>
            Sub Option danger
          </SelectItemSub>
          <SelectItem onClick={setSelected} option={option}>
            {option ? "Option 3" : "Option 1 option 1 to see"}
          </SelectItem>
          <SelectItem onClick={setSelected}>
            {option ? "Option 4" : "Option 1 option 1 to see"}
          </SelectItem>
        </SelectDropDownWrapper>
      </BtnWrapContainer>
    );
  }
}
