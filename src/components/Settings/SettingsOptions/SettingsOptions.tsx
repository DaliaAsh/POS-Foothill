import React, { useState, useEffect } from "react";
import SettingsIcon from "@material-ui/icons/Settings";
import GroupIcon from "@material-ui/icons/Group";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import { withRouter, Link } from "react-router-dom";
import useSettingsOptions from "./useSettingsOptions";
import { MenuItem, List, makeStyles, createStyles } from "@material-ui/core";
const useStyles = makeStyles(() =>
  createStyles({
    options: {
      display: "flex",
      marginTop: " 5%",
      flexWrap: "wrap",
      marginLeft: "7%",
    },
    option: {
      color: "#777",
      fontSize: "0.8em",
      borderBottom: "1px solid #888",
      "&:hover": {
        color: "#1877f2",
        borderBottom: "1px solid #1877f2",
      },
    },
  })
);
const SettingsOptions = (props) => {
  const { checked, navigateToOption } = useSettingsOptions(props);
  const classes = useStyles();
  return (
    <List className={classes.options}>
      <MenuItem
        className={classes.option}
        onClick={() => {
          navigateToOption("settings", 0);
        }}
        style={
          checked === 0
            ? { color: "#1877f2", borderBottom: "2px solid #1877f2" }
            : null
        }
      >
        <SettingsIcon fontSize="small" htmlColor="999" />
        <span>Settings</span>
      </MenuItem>
      <MenuItem
        className={classes.option}
        onClick={() => {
          navigateToOption("users", 1);
        }}
        style={
          checked === 1
            ? { color: "#1877f2", borderBottom: "2px solid #1877f2" }
            : null
        }
      >
        <GroupIcon fontSize="small" htmlColor="999" />
        <span>Users</span>
      </MenuItem>
      <MenuItem
        className={classes.option}
        onClick={() => {
          navigateToOption("stores", 2);
        }}
        style={
          checked === 2
            ? { color: "#1877f2", borderBottom: "2px solid #1877f2" }
            : null
        }
      >
        <LocalGroceryStoreIcon fontSize="small" htmlColor="999" />
        <span>Stores</span>
      </MenuItem>

      <div
        style={{
          borderBottom: "1px solid #777",
          width: "50em",
        }}
      ></div>
    </List>
  );
};
export default withRouter(SettingsOptions);
