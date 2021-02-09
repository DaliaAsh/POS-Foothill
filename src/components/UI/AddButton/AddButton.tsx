import React from "react";
import { styled, Button } from "@material-ui/core";
interface AddButtonProps {
  children: string;
  onClick: () => void;
  marginLeft: string;
  backgroundColor?: string;
}

const AddButton = (props: AddButtonProps) => {
  const StyledButton = styled(Button)({
    textTransform: "unset",
    backgroundColor: "#33b2e5",
    color: "white",
    alignSelf: "flex-start",
    marginLeft: props.marginLeft,
    marginTop: "2em",
    padding: "0.8em 1.5em",
    fontSize: "1em",
  });
  return (
    <StyledButton
      variant="contained"
      onClick={props.onClick}
      style={{ backgroundColor: props.backgroundColor }}
    >
      {props.children}
    </StyledButton>
  );
};
export default AddButton;
