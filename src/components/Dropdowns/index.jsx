import React from "react";
import Card from "../Card";
import { LayoutContainer, LayoutWrapper } from "../Layout/style";
import { DropDown } from "./Dropdow";
import { DropdownList, DropdownText, DropdownTitle } from "./style";

export class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
  }

  render() {
    const hoverIn = (e) => {
      e.target.nextElementSibling.style.display = "block";
      e.target.children[0].style.transform = "rotate(180deg)";
    };
    return (
      <>
        <DropdownTitle>Dropdown</DropdownTitle>
        <DropdownText>A dropdown list.</DropdownText>
        <DropdownTitle>When To Use</DropdownTitle>
        <DropdownList>
          <li>
            When there are more than a few options to choose from, you can wrap
            them in a Dropdown. By hovering or clicking on the trigger, a
            dropdown menu will appear, which allows you to choose an option and
            execute the relevant action.
          </li>
        </DropdownList>
        <LayoutWrapper>
          <LayoutContainer>
            <Card
              type="disabled with arrow"
              desc={"The most basic dropdown menu."}
            >
              <DropDown disabled="disabled"></DropDown>
            </Card>
            <Card type="basic" desc={"The most basic dropdown with hover prop"}>
              <DropDown
                onMouseEnter={hoverIn}
                hover="hover"
              >
                Option 1 option 1 to see
              </DropDown>
            </Card>
            <Card
              type="basic with aligning top"
              desc={"The most basic dropdown menu."}
            >
              <DropDown option="option"></DropDown>
            </Card>
          </LayoutContainer>
          <LayoutContainer>
            <Card
              type="basic with aligning top"
              desc={"The most basic dropdown menu."}
            >
              <DropDown option="option"></DropDown>
            </Card>
            <Card
              type="Button with dropdown menu aligned to bottom"
              desc={
                "A button is on the left, and a related functional menu is on the right. You can set the icon property to modify the icon of right."
              }
            >
              <DropDown paw="paw" option="option"></DropDown>
              <DropDown at="at" option="option"></DropDown>
              <DropDown dots="dots" option="option"></DropDown>
              <DropDown user="user" option="option"></DropDown>
              <DropDown load="load" option="option"></DropDown>
            </Card>
          </LayoutContainer>
        </LayoutWrapper>
      </>
    );
  }
}
