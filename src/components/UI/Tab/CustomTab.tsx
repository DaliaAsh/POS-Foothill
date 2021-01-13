import React from "react";
import { styled, ListItem } from "@material-ui/core";
interface TabProps {
  children: JSX.Element[] | JSX.Element;
}
const CustomTab = styled(ListItem)({
  marginLeft: "1%",
  backgroundColor: "#e2e2e2",
  color: "#555",
  padding: "0.5em",
  borderRadius: "0.4em",
  "&:hover": {
    cursor: "pointer",
  },
});
const Tab = (props: TabProps) => {
  return <CustomTab button>{props.children}</CustomTab>;
};
export default Tab;
