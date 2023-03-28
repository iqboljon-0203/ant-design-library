import React from "react";
import Card from "../Card";
import { LayoutContainer, LayoutWrapper } from "../Layout/style";
import { MiddleTooltipWrapper, TooltipList, TooltipText, TooltipTitle, TooltSizesWrapper, TopTooltipWrapper } from "./style";
import { ToolTip } from "./Tooltip";

export const Tooltip = () => {
  return (
    <>
      <TooltipTitle>Tooltip</TooltipTitle>
      <TooltipText>A simple text popup tip.</TooltipText>
      <TooltipTitle>When To Use</TooltipTitle>
      <TooltipList>
        <li>The tip is shown on mouse enter, and is hidden on mouse leave.</li>
        <li>The Tooltip doesn't support complex text or operations.</li>
        <li>It's often used instead of the html title attribute.</li>
      </TooltipList>

      <LayoutWrapper>
        <LayoutContainer>
          <Card type="Basic Text" desc={"Basic hover tooltip with text"}>
              <ToolTip size="medium">Hover me</ToolTip>
          </Card>
          <Card type="Buttons with Sizes" desc={"Buttons with different Large, Medium, Small sizes"}>
            <TooltSizesWrapper>
              <ToolTip border block size="small">
              Small Tooltip with button
              </ToolTip>
              <ToolTip border block size="medium">
              Med Tooltip with button
              </ToolTip>
              <ToolTip border block size="large">
              Large Tooltip with button
              </ToolTip>
            </TooltSizesWrapper>
          </Card>
        </LayoutContainer>
        <LayoutContainer>
          <Card type="Placement" desc={"Basic hover tooltip with text"}>
            <TopTooltipWrapper>
              <ToolTip border size="large">Top Tooltip</ToolTip>
              <ToolTip border size="large">Top Tooltip</ToolTip>
              <ToolTip border size="large">Top Tooltip</ToolTip>
            </TopTooltipWrapper>
            <MiddleTooltipWrapper>
              <ToolTip toolPos="right" border size="large">Right Tooltip</ToolTip>
              <ToolTip toolPos="left" border size="large">Left Tooltip</ToolTip>
            </MiddleTooltipWrapper>
            <MiddleTooltipWrapper>
              <ToolTip toolPos="right" border size="large">Right Tooltip</ToolTip>
              <ToolTip toolPos="left" border size="large">Left Tooltip</ToolTip>
            </MiddleTooltipWrapper>
            <TopTooltipWrapper>
              <ToolTip toolPos="bottom" border size="large">Bottom Tooltip</ToolTip>
              <ToolTip toolPos="bottom" border size="large">Bottom Tooltip</ToolTip>
              <ToolTip toolPos="bottom" border size="large">Bottom Tooltip</ToolTip>
            </TopTooltipWrapper>
          </Card>
          <Card type="BgColor" desc={"Basic hover tooltip with text"}>
          <ToolTip toolBgColor="green" border size="medium">Green</ToolTip>
          <ToolTip toolBgColor="blue" border size="medium">Blue</ToolTip>
          <ToolTip toolBgColor="red" border size="medium">Red</ToolTip>
          <ToolTip toolBgColor="black" border size="medium">Black</ToolTip>
          <ToolTip toolBgColor="yellow" border size="medium">Yellow</ToolTip>
          <ToolTip toolBgColor="pink" border size="medium">Pink</ToolTip>
          <ToolTip toolBgColor="orange" border size="medium">Orange</ToolTip>
          <ToolTip toolBgColor="limegreen" border size="medium">Limegreen</ToolTip>
          <ToolTip toolBgColor="brown" border size="medium">Brown</ToolTip>
          <ToolTip toolBgColor="aqua" border size="medium">Aqua</ToolTip>
          <ToolTip toolBgColor="orchid" border size="medium">Orchid</ToolTip>
          <ToolTip toolBgColor="gold" border size="medium">Gold</ToolTip>
          <ToolTip toolBgColor="magenta" border size="medium">Magenta</ToolTip>
          <ToolTip toolBgColor="dimgray" border size="medium">Dimgray</ToolTip>
          <ToolTip toolBgColor="crimson" border size="medium">Crimson</ToolTip>
          <ToolTip toolBgColor="chocolate" border size="medium">Chocolate</ToolTip>
          </Card>
        </LayoutContainer>
      </LayoutWrapper>
    </>
  );
};
