import { FormHelperText, styled } from "@material-ui/core";
import React from "react";
interface warningHelperText {
  error: string;
}
const WarningHelperText = styled(FormHelperText)({
  marginTop: "-0.7em",
  marginBottom: "1em",
});
const warningHelperText = (props: warningHelperText) => (
  <WarningHelperText error={true}>{props.error}</WarningHelperText>
);
export default warningHelperText;
