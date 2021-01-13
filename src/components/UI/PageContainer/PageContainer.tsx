import React from "react";
import { styled } from "@material-ui/core";
const Container = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

const PageContainer = (props: { children: JSX.Element[] | JSX.Element }) => (
  <Container>{props.children}</Container>
);
export default PageContainer;
