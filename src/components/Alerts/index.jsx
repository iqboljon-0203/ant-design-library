import React from "react";
import Card from "../Card";
import { LayoutContainer, LayoutWrapper } from "../Layout/style";
import { GenericAlert } from "./Alert";
import { AlertList, AlertText, AlertTitle } from "./style";

import SuccessImg from "../../assets/icons/alert_success.svg";
import WarningImg from "../../assets/icons/alert_warning.svg";
import ErrorImg from "../../assets/icons/alert_error.svg";
import InfoImg from "../../assets/icons/alert_info.svg";
import CloseBtn from "../../assets/icons/x.svg";

export const Alert = () => {
  return (
    <>
      <AlertTitle>Alert</AlertTitle>
      <AlertText>Alert component for feedback.</AlertText>
      <AlertTitle>When To Use</AlertTitle>
      <AlertList>
        <li>When you need to show alert messages to users.</li>
        <li>
          When you need a persistent static container which is closable by user
          actions.
        </li>
      </AlertList>

      <LayoutWrapper>
        <LayoutContainer>
          <Card type="Basic" desc={"The simplest usage for short messages."}>
            <GenericAlert type="success">Success alert</GenericAlert>
          </Card>
          <Card
            type="More types"
            desc={"There are 4 types of Alert: success, info, warning, error"}
          >
            <GenericAlert type="success">Success alert</GenericAlert>
            <GenericAlert type="warning">Warning alert</GenericAlert>
            <GenericAlert type="error">Error alert</GenericAlert>
            <GenericAlert type="info">Info alert</GenericAlert>
          </Card>
          <Card
            type="Description"
            desc={"Additional description for alert message."}
          >
            <GenericAlert
              img={SuccessImg}
              desc="description description description description description description description"
              type="success"
            >
              Success alert
            </GenericAlert>
            <GenericAlert
              img={WarningImg}
              desc="description description description description description description description"
              type="warning"
            >
              Warning alert
            </GenericAlert>
            <GenericAlert
              img={ErrorImg}
              desc="description description description description description description description"
              type="error"
            >
              Error alert
            </GenericAlert>
            <GenericAlert
              img={InfoImg}
              desc="description description description description description description description"
              type="info"
            >
              Info alert
            </GenericAlert>
          </Card>
        </LayoutContainer>
        <LayoutContainer>
          <Card type="Closable" desc={"To show close button."}>
            <GenericAlert closeBtn={CloseBtn} img={SuccessImg} type="success">
              Icon alert
            </GenericAlert>
            <GenericAlert
              closeBtn={CloseBtn}
              img={ErrorImg}
              desc="description description description description description description description description description description description description description description descriptiondescription description description description description"
              type="error"
            >
              Error alert
            </GenericAlert>
            <GenericAlert
              closeBtn={CloseBtn}
              img={InfoImg}
              desc="description description description description description description description description description description description description description description descriptiondescription description description description description"
              type="info"
            >
              Info alert
            </GenericAlert>
          </Card>
          <Card
            type="Closable closeText"
            desc={"To show close button. closeText='close now'"}
          >
            <GenericAlert closeText="close now" img={SuccessImg} type="success">
              Icon alert
            </GenericAlert>
            <GenericAlert
              closeText="close now"
              img={ErrorImg}
              desc="description description description description description description description description description description description description description description descriptiondescription description description description description"
              type="error"
            >
              Error alert
            </GenericAlert>
            <GenericAlert
              closeText="close now"
              img={InfoImg}
              desc="description description description description description description description description description description description description description description descriptiondescription description description description description"
              type="info"
            >
              Info alert
            </GenericAlert>
          </Card>
        </LayoutContainer>
      </LayoutWrapper>
    </>
  );
};
