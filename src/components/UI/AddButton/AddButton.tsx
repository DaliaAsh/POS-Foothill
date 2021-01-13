import React from "react";
import { styled, Button } from "@material-ui/core";
interface AddButtonProps {
  children: string;
  onClick: () => void;
  marginLeft: string;
}

const AddButton = (props: AddButtonProps) => {
  const StyledButton = styled(Button)({
    textTransform: "unset",
    backgroundColor: "#555",
    color: "white",
    alignSelf: "flex-start",
    marginLeft: props.marginLeft,
    marginTop: "2em",
  });
  return (
    <StyledButton variant="contained" onClick={props.onClick}>
      {props.children}
    </StyledButton>
  );
};
export default AddButton;
