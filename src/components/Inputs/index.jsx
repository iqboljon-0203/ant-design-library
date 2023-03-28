import React from "react";
import Card from "../Card";
import { LayoutContainer, LayoutWrapper } from "../Layout/style";
import { InputNumber } from "./input_number_default";
import { InputdUserDefault } from "./input_user_default";
import { NormalBgColor } from "./normal_bgcolor";
import { NormalDanger } from "./normal_danger";
import { NormalDefault } from "./normal_default";
import { NormalDisabled } from "./normal_disabled";
import { NormalSuccess } from "./normal_success";
import { PasswordBg } from "./password_bg";
import { PasswordDanger } from "./password_danger";
import { PasswordDefault } from "./password_default";
import { PasswordDisabledAll } from "./password_disabled_all";
import { PasswordSuccess } from "./password_success";
import { InputsList, InputsText, InputsTitle } from "./style";

export const Inputs = () => {
  return (
    <>
      <InputsTitle>Input</InputsTitle>
      <InputsText>To get user input</InputsText>
      <InputsTitle>When To Use</InputsTitle>
      <InputsText>
        A basic widget for getting the user input is a text field. Keyboard and
        mouse can be used for providing or changing data.
      </InputsText>

      <InputsList>
        <li>A user input in a form field is needed.</li>
      </InputsList>

      <LayoutWrapper>
        <LayoutContainer>
          <Card type="Normal Default" desc={"type='normal' button size='large, medium, small' placeholder='normal medium'"}>
            <NormalDefault placeholder="Normal Default Small" type="default" size="small"/>
            <NormalDefault placeholder="Normal Default Medium" type="default" size="medium"/>
            <NormalDefault placeholder="Normal Default Large" type="default" size="large"/>
          </Card>
          <Card type="Normal Danger" desc={"type='normal' button size='large, medium, small' placeholder='normal medium'"}>
            <NormalDanger placeholder="Normal Danger Small" type="danger" size="small"/>
            <NormalDanger placeholder="Normal Danger Medium" type="danger" size="medium"/>
            <NormalDanger placeholder="Normal Danger Large" type="danger" size="large"/>
          </Card>
          <Card type="Normal Success" desc={"type='normal' button size='large, medium, small' placeholder='normal medium'"}>
            <NormalSuccess placeholder="Normal Success Small" type="success" size="small"/>
            <NormalSuccess placeholder="Normal Success Medium" type="success" size="medium"/>
            <NormalSuccess placeholder="Normal Success Large" type="success" size="large"/>
          </Card>
          <Card type="Normal Disabled All Types" desc={"type='normal' button size='large, medium, small' placeholder='normal medium'"}>
            <NormalDisabled disabled="disabled" placeholder="Normal Default Disabled" type="default" size="large"/>
            <NormalDisabled disabled="disabled" placeholder="Normal Danger Disabled" type="danger" size="large"/>
            <NormalDisabled disabled="disabled" placeholder="Normal Success Disabled" type="success" size="large"/>
          </Card>
          <Card type="Normal bgColor" desc={"type='normal' button size='large, medium, small' placeholder='normal medium'"}>
            <NormalBgColor bgColor="default" placeholder="Normal Default BgColor" type="default" size="large"/>
            <NormalBgColor bgColor="danger" placeholder="Normal Danger BgColor" type="danger" size="large"/>
            <NormalBgColor bgColor="success" placeholder="Normal Success BgColor" type="success" size="large"/>
          </Card>
          <Card type="Password Default" desc={"type='normal' button size='large, medium, small' placeholder='normal medium'"}>
            <PasswordDefault inputType="default" placeholder="Password Default Small" type="password" size="small"/>
            <PasswordDefault inputType="default" placeholder="Password Default Medium" type="password" size="medium"/>
            <PasswordDefault inputType="default" placeholder="Password Default Large" type="password" size="large"/>
          </Card>
          <Card type="Password Danger" desc={"type='normal' button size='large, medium, small' placeholder='normal medium'"}>
            <PasswordDanger inputType="danger" placeholder="Password Default Small" type="password" size="small"/>
            <PasswordDanger inputType="danger" placeholder="Password Default Medium" type="password" size="medium"/>
            <PasswordDanger inputType="danger" placeholder="Password Default Large" type="password" size="large"/>
          </Card>
          <Card type="Password Success" desc={"type='normal' button size='large, medium, small' placeholder='normal medium'"}>
            <PasswordSuccess inputType="success" placeholder="Password Default Small" type="password" size="small"/>
            <PasswordSuccess inputType="success" placeholder="Password Default Medium" type="password" size="medium"/>
            <PasswordSuccess inputType="success" placeholder="Password Default Large" type="password" size="large"/>
          </Card>
          <Card type="Password Disabled All Types" desc={"type='normal' button size='large, medium, small' placeholder='normal medium'"}>
            <PasswordDisabledAll disabled="disabled" inputType="default" placeholder="Password Default Disabled" type="password" size="large"/>
            <PasswordDisabledAll disabled="disabled" inputType="danger" placeholder="Password Danger Disabled" type="password" size="large"/>
            <PasswordDisabledAll disabled="disabled" inputType="success" placeholder="Password Success Disabled" type="password" size="large"/>
          </Card>
          <Card type="Password Bg Color" desc={"type='normal' button size='large, medium, small' placeholder='normal medium'"}>
            <PasswordBg inputType="default" placeholder="Password Default Disabled" type="password" size="large"/>
            <PasswordBg inputType="danger" placeholder="Password Danger Disabled" type="password" size="large"/>
            <PasswordBg inputType="success" placeholder="Password Success Disabled" type="password" size="large"/>
          </Card>
          <Card type="Default" desc={"type='normal' button size='large, medium, small' placeholder='normal medium'"}>
            <InputdUserDefault left inputType="default" placeholder="Left default small" size="small"/>
            <InputdUserDefault inputType="default" placeholder="Right default small" size="small"/>
            <InputdUserDefault left inputType="default" placeholder="Left default medium" size="medium"/>
            <InputdUserDefault inputType="default" placeholder="Right default medium" size="medium"/>
            <InputdUserDefault left inputType="default" placeholder="Left default large" size="large"/>
            <InputdUserDefault inputType="default" placeholder="Right default large" size="large"/>
          </Card>
        </LayoutContainer>
        <LayoutContainer>
          <Card type="Danger" desc={"type='normal' button size='large, medium, small' placeholder='normal medium'"}>
            <InputdUserDefault btnBg="danger" left inputType="danger" placeholder="Left Danger Small" size="small"/>
            <InputdUserDefault btnBg="danger" inputType="danger" placeholder="Right Danger Small" size="small"/>
            <InputdUserDefault btnBg="danger" left inputType="danger" placeholder="Left Danger Medium" size="medium"/>
            <InputdUserDefault btnBg="danger" inputType="danger" placeholder="Right Danger Medium" size="medium"/>
            <InputdUserDefault btnBg="danger" left inputType="danger" placeholder="Left Danger Large" size="large"/>
            <InputdUserDefault btnBg="danger" inputType="danger" placeholder="Right Danger Large" size="large"/>
          </Card>
          <Card type="Success" desc={"type='normal' button size='large, medium, small' placeholder='normal medium'"}>
            <InputdUserDefault btnBg="success" left inputType="success" placeholder="Left Danger Small" size="small"/>
            <InputdUserDefault btnBg="success" inputType="success" placeholder="Right Danger Small" size="small"/>
            <InputdUserDefault btnBg="success" left inputType="success" placeholder="Left Danger Medium" size="medium"/>
            <InputdUserDefault btnBg="success" inputType="success" placeholder="Right Danger Medium" size="medium"/>
            <InputdUserDefault btnBg="success" left inputType="success" placeholder="Left Danger Large" size="large"/>
            <InputdUserDefault btnBg="success" inputType="success" placeholder="Right Danger Large" size="large"/>
          </Card>
          <Card type="BgColor" desc={"type='normal' button size='large, medium, small' placeholder='normal medium'"}>
            <InputdUserDefault btnBg="default" left inputType="default" placeholder="Left Danger Small" size="large"/>
            <InputdUserDefault btnBg="default" inputType="default" placeholder="Right Danger Small" size="large"/>
            <InputdUserDefault btnBg="danger" left inputType="danger" placeholder="Left Danger Medium" size="large"/>
            <InputdUserDefault btnBg="danger" inputType="danger" placeholder="Right Danger Medium" size="large"/>
            <InputdUserDefault btnBg="success" left inputType="success" placeholder="Left Danger Large" size="large"/>
            <InputdUserDefault btnBg="success" inputType="success" placeholder="Right Danger Large" size="large"/>
          </Card>
          <Card type="Default" desc={"type='normal' button size='large, medium, small' placeholder='normal medium'"}>
            <InputNumber type="number" inputType="default" placeholder="Default Small" size="small"/>
            <InputNumber type="number" inputType="default" placeholder="Default Medium" size="medium"/>
            <InputNumber type="number" inputType="default" placeholder="Default Large" size="large"/>
          </Card>
          <Card type="Danger" desc={"type='normal' button size='large, medium, small' placeholder='normal medium'"}>
            <InputNumber type="number" inputType="danger" placeholder="Danger Small" size="small"/>
            <InputNumber type="number" inputType="danger" placeholder="Danger Medium" size="medium"/>
            <InputNumber type="number" inputType="danger" placeholder="Danger Large" size="large"/>
          </Card>
          <Card type="Success" desc={"type='normal' button size='large, medium, small' placeholder='normal medium'"}>
            <InputNumber type="number" inputType="success" placeholder="Success Small" size="small"/>
            <InputNumber type="number" inputType="success" placeholder="Success Medium" size="medium"/>
            <InputNumber type="number" inputType="success" placeholder="Success Large" size="large"/>
          </Card>
          <Card type="Disabled All Types" desc={"type='normal' button size='large, medium, small' placeholder='normal medium'"}>
            <InputNumber disabled="disabled" type="number" inputType="default" placeholder="Number Default Disabled" size="large"/>
            <InputNumber disabled="disabled" type="number" inputType="danger" placeholder="Number Danger Disabled" size="large"/>
            <InputNumber disabled="disabled" type="number" inputType="success" placeholder="Number Success Disabled" size="large"/>
          </Card>
          <Card type="BgColor" desc={"type='normal' button size='large, medium, small' placeholder='normal medium'"}>
            <InputNumber bgColor="default" type="number" inputType="default" placeholder="Number Default" size="large"/>
            <InputNumber bgColor="danger" type="number" inputType="danger" placeholder="Number Danger" size="large"/>
            <InputNumber bgColor="success" type="number" inputType="success" placeholder="Number Success" size="large"/>
          </Card>
          <Card type="Float Number" desc={"type='normal' button size='large, medium, small' placeholder='normal medium'"}>
            <InputNumber floatNum type="number" inputType="default" placeholder="Number Default" size="large"/>
            <InputNumber floatNum type="number" inputType="danger" placeholder="Number Danger" size="large"/>
            <InputNumber floatNum type="number" inputType="success" placeholder="Number Success" size="large"/>
          </Card>
        </LayoutContainer>
      </LayoutWrapper>
    </>
  );
};
