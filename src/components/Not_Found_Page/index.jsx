import React from "react";
import { PathLink } from "../Components/style";
import { NotFoundPage, NotFoundPageImg } from "./style";

export const NotFound = () => {
  return (
    <NotFoundPage>
      <NotFoundPageImg>
        <PathLink style={{ width: "180px",fontSize:"20px",height:"55px" }} to={"/components"}>
          Back to menu
        </PathLink>
      </NotFoundPageImg>
    </NotFoundPage>
  );
};
