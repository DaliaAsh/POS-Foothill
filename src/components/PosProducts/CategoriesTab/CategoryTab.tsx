import React, { useState } from "react";
import { Paper, createStyles, makeStyles, Theme } from "@material-ui/core";
interface CategoryTabProps {
  categoryName: string;
  clickTabHandler: () => void;
  // tabClicked: boolean;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tab: {
      padding: theme.spacing(2),
      margin: "0.5%",
      textTransform: "uppercase",
      fontWeight: 600,
      "&:hover": {
        cursor: "pointer",
      },
    },
  })
);

const CategoryTab = (props: CategoryTabProps) => {
  const classes = useStyles();
  return (
    <Paper className={classes.tab} onClick={props.clickTabHandler}>
      {props.categoryName}
    </Paper>
  );
};
export default CategoryTab;
/**  style={
        props.tabClicked
          ? {
              color: "#e2e2e2",
              backgroundColor: "#7e6b6b",
              borderBottom: "3px solid red",
            }
          : {
              backgroundColor: "#e2e2e2",
              color: "#7e6b6b",
              borderBottom: "3px solid green",
            }
      } */
