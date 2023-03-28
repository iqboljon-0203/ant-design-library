import React, { Component } from "react";
import {
  PasswordDefaultInput,
  PasswordInputBtn,
  PasswordInputWrapper,
} from "./style";

import EyeHideIcon from "../../../assets/icons/eye_hide.svg";
import EyeOpenIcon from "../../../assets/icons/eye_open.svg";

export class PasswordDefault extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
    };
  }
  render() {
    let { type, disabled, placeholder, ...res } = this.props;
    const hideFunc = () => {
      this.setState({ hidden: !this.state.hidden });
    };
    return (
      <PasswordInputWrapper>
        <PasswordDefaultInput
          type={this.state.hidden !== true ? type : "text"}
          disabled={disabled}
          placeholder={placeholder}
          {...res}
        ></PasswordDefaultInput>
        <PasswordInputBtn onClick={hideFunc}>
          {this.state.hidden ? (
            <img src={EyeHideIcon} alt="img" />
          ) : (
            <img src={EyeOpenIcon} alt="img" />
          )}
        </PasswordInputBtn>
      </PasswordInputWrapper>
    );
  }
}
