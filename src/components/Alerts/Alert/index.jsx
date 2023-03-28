import React from "react";
import {
  AlertBtnCloseImg,
  AlertBtnWrapper,
  AlertDesc,
  AlertIcons,
  AlertInner,
  AlertInnerTitle,
  AlertInnerWrapper,
  CloseBtn,
  CloseBtnText,
  PlainAlert,
} from "./style";

export const GenericAlert = ({
  closeText,
  closeBtn,
  children,
  img,
  desc,
  closeFunc,
  ...res
}) => {
  return (
    <>
      <PlainAlert {...res}>
        <AlertInner>
          <div>{img ? <AlertIcons src={img} alt="img" /> : null}</div>
          <AlertInnerWrapper>
            <AlertInnerTitle>{children}</AlertInnerTitle>
            <AlertDesc desc={desc}>{desc}</AlertDesc>
          </AlertInnerWrapper>
          <AlertBtnWrapper>
            {closeBtn ? (
              <CloseBtn
                onClick={(e) => {
                  e.target.parentElement.parentElement.parentElement.parentElement.style.display =
                    "none";
                }}
              >
                <AlertBtnCloseImg src={closeBtn} alt="img" />
              </CloseBtn>
            ) : null}
            {closeText ? (
              <CloseBtnText
                onClick={(e) => {
                  e.target.parentElement.parentElement.parentElement.style.display =
                    "none";
                }}
              >
                {closeText}
              </CloseBtnText>
            ) : null}
          </AlertBtnWrapper>
        </AlertInner>
      </PlainAlert>
    </>
  );
};
