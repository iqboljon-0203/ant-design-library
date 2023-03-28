import React from "react";
import Card from "../Card";
import { LayoutWrapper } from "../Layout/style";
import { TableList, TableText, TableTitle } from "./style";
import ScrollableTable from "./Table";

export const Table = () => {
  return (
    <>
      <TableTitle>Table</TableTitle>
      <TableText>To toggle an operation</TableText>
      <TableTitle>When To Use</TableTitle>
      <TableText>
        A button means an operation (or a series of operations). Clicking a
        button will trigger corresponding business logic.
      </TableText>
      <TableList>
        <li>
          Primary button: indicate the main action, one primary button at most
          in one section.
        </li>
        <li>
          Primary button: indicate the main action, one primary button at most
          in one section.
        </li>
        <li>
          Primary button: indicate the main action, one primary button at most
          in one section.
        </li>
      </TableList>

      <LayoutWrapper>
        <Card type="Table" desc={"Scrollable and Editable Table"}>
          <ScrollableTable />
        </Card>
      </LayoutWrapper>
    </>
  );
};
