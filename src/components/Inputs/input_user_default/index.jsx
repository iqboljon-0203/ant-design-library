import React, { Component } from "react";
import {
  InputdUserDefaultWrapper,
  PasswordInputBtn,
  PasswordInputWrapper,
} from "./style";

export class InputdUserDefault extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
    };
  }
  render() {
    let { btnBg, inputType, type, disabled, placeholder, ...res } = this.props;
    const hideFunc = () => {
      this.setState({ hidden: !this.state.hidden });
    };
    return (
      <PasswordInputWrapper>
        <InputdUserDefaultWrapper
          inputType={inputType}
          type={this.state.hidden !== true ? type : "text"}
          disabled={disabled}
          placeholder={placeholder}
          {...res}
        ></InputdUserDefaultWrapper>
        <PasswordInputBtn
          btnBg={btnBg}
          {...res}
          inputType={inputType}
          onClick={hideFunc}
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="StyledIconBase-ea9ulj-0 iKhrnw"
          >
            <circle cx="12" cy="7" r="3" fill="none"></circle>
            <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm9 11v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1h2z"></path>
          </svg>
        </PasswordInputBtn>
      </PasswordInputWrapper>
    );
  }
}
