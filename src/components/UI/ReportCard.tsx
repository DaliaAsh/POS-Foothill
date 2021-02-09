import React from "react";
import { Grid, makeStyles, createStyles } from "@material-ui/core";
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "20em",
      height: "7em",
      display: "flex",
      marginLeft: "2em",
      marginTop: "2em",
      "@media (max-width:680px)": {
        marginLeft: "auto",
        marginRight: "auto",
      },
      animation: "1.5s $fadeIn",
    },
    iconContainer: {
      width: "50%",
      height: "80%",
      borderRight: "3px solid #ffffff",
      marginTop: "auto",
      marginBottom: "auto",
    },
    details: {
      width: "50%",
      height: "80%",
      margin: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    number: {
      color: "white",
      fontSize: "2em",
      fontWeight: 800,
    },
    title: {
      color: "white",
      fontSize: "1.5em",
    },
    "@keyframes fadeIn": {
      "0%": {
        opacity: "0",
      },
      "50%": {
        opacity: "0.4",
      },
      "100%": {
        opacity: "1",
      },
    },
  })
);
interface ReportCardProps {
  bgColor: string;
  Icon: JSX.Element;
  number: number;
  title: string;
}
const ReportCard = (props: ReportCardProps) => {
  const classes = useStyles();
  const { bgColor, Icon, number, title } = props;
  return (
    <Grid className={classes.root} style={{ backgroundColor: bgColor }}>
      <Grid className={classes.iconContainer}>{Icon}</Grid>
      <Grid className={classes.details}>
        <Grid className={classes.number}>{number}</Grid>
        <Grid className={classes.title}>{title}</Grid>
      </Grid>
    </Grid>
  );
};
export default ReportCard;
