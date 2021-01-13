import React, { useState } from "react";
import { Select } from "@material-ui/core";
interface LanguageListProps {
  handleListChange: (value: any) => void;
}
const LanguageList = (props: LanguageListProps) => {
  // const [optionValue, setOptionValue] = useState("");
  return (
    <Select
      native={true}
      onChange={(event: any) => {
        props.handleListChange(event.target.value);
        // setOptionValue(event.target.value);
      }}
      //   value={optionValue}
    >
      <option>English</option>
      <option>العربية</option>
    </Select>
  );
};
export default LanguageList;
