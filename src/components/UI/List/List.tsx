import React from "react";
import { Select, MenuItem, styled } from "@material-ui/core";
interface ListProps {
  options: number[];
  value: number;
  handleChangeOption: (event) => void;
}
const SelectList = styled(Select)({
  width: "5em",
  height: "2em",
});
const List = (props: ListProps) => {
  return (
    <SelectList
      value={props.value}
      onChange={(event) => props.handleChangeOption(event)}
      variant="outlined"
    >
      {props.options.map((option) => (
        <MenuItem value={option} key={Date.now()}>
          {option}
        </MenuItem>
      ))}
    </SelectList>
  );
};
export default List;
