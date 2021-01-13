import React, { useState } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { styled } from "@material-ui/core/styles";
const LabelSpan = styled("span")({
  color: "#555",
  fontWeight: "bold",
  fontFamily: "Calibri",
  marginLeft: "2%",
  marginRight: "2em",
});
const DatePickerContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  width: "30%",
});
interface DateItemProps {
  label: string;
}
const DateItem = (props: DateItemProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    new Date("2014-08-18T21:11:54")
  );
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  return (
    <DatePickerContainer>
      <LabelSpan>{props.label}</LabelSpan>
      <KeyboardDatePicker
        margin="normal"
        id="date-picker-dialog"
        format="MM/dd/yyyy"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
        size="small"
      />
    </DatePickerContainer>
  );
};
export default DateItem;
