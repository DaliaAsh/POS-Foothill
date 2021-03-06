import React from "react";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { styled } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import "date-fns";
import DateItem from "./DateItem";
import { Button } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
const DateFilter = () => {
  const mobileOrientation = useMediaQuery("(max-width:650px)");
  const ApplyFilterButton = styled(Button)({
    textTransform: "unset",
    backgroundColor: "white",
    border: "1px solid #ccc",
    color: "black",
  });
  const LabelSpan = styled("span")({
    color: "#555",
    fontWeight: "bold",
    fontFamily: "Calibri",
    marginLeft: "2%",
    marginRight: "2em",
  });
  const DateFilterContainer = styled("div")({
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: "1em",
  });

  return (
    <DateFilterContainer>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <LabelSpan>Expiration Date</LabelSpan>
        <DateItem label="From" />
        <DateItem label="To" />
        <ApplyFilterButton variant="contained">Apply Filter</ApplyFilterButton>
      </MuiPickersUtilsProvider>
    </DateFilterContainer>
  );
};
export default DateFilter;
