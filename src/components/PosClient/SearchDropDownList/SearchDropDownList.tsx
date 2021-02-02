import React, { useState } from "react";
import {
  makeStyles,
  createStyles,
  Paper,
  Theme,
  OutlinedInput,
  Grid,
  InputAdornment,
  List,
  MenuItem,
  IconButton,
  InputBase,
} from "@material-ui/core";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import useSearchDropDownListHook from "./useSearchDropDownListHook";
interface SearchDropDownListProps {
  options: number[] | string[];
  style?: Object;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "75%",
      backgroundColor: "white",
      position: "relative",
      margin: "auto",
      marginBottom: "2.5em",
    },
    dropDownList: {
      width: "100%",
      padding: theme.spacing(1),
      border: "1px solid #344963",
      borderRadius: "0.2em",
      "&:hover": {
        cursor: "pointer",
      },
    },
    openDropDownList: {
      width: "100%",
      padding: theme.spacing(1),
      border: "1px solid #5897fb",
      borderRadius: "0.2em",
      "&:hover": {
        cursor: "pointer",
      },
    },
    content: {
      backgroundColor: "white",
      zIndex: 1,
      position: "absolute",
      width: "100%",
      top: "100%",
    },
    searchInput: {
      width: "97%",
      margin: "1.5%",
    },
    searchInputContainer: {
      backgroundColor: "white",
    },
    menuItem: {
      backgroundColor: "white",
      "&:hover": {
        backgroundColor: "#5897fb",
        color: "white",
      },
    },
    list: {
      maxHeight: "8em",
      overflowY: "auto",
    },
  })
);
const SearchDropDownList = (props: SearchDropDownListProps) => {
  const {
    openDropDownList,
    toggleOpenDropDownList,
    searchHandler,
    searchQuery,
    filteredClients,
    selectedClient,
    selectClientName,
  } = useSearchDropDownListHook(props);
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      style={props.style ? props.style : null}
    >
      <InputBase
        onClick={toggleOpenDropDownList}
        value={selectedClient}
        placeholder={filteredClients.length > 0 ? filteredClients[0] : ""}
        disabled
        className={
          openDropDownList ? classes.openDropDownList : classes.dropDownList
        }
        inputProps={{ style: { height: "0.1em" } }}
        endAdornment={
          <InputAdornment position="end">
            {openDropDownList ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </InputAdornment>
        }
      />
      {openDropDownList ? (
        <Grid className={classes.content}>
          <Grid className={classes.searchInputContainer}>
            <OutlinedInput
              className={classes.searchInput}
              inputProps={{ style: { height: "0.05em" } }}
              value={searchQuery}
              onChange={(event) => searchHandler(event.target.value)}
            />
          </Grid>
          <List className={classes.list}>
            {filteredClients.map((clientName: string) => (
              <MenuItem
                className={classes.menuItem}
                onClick={() => selectClientName(clientName)}
              >
                {clientName}
              </MenuItem>
            ))}
          </List>
        </Grid>
      ) : null}
    </Grid>
  );
};
export default SearchDropDownList;
