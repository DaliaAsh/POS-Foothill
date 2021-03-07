import React from "react";
import { Grid, makeStyles, createStyles } from "@material-ui/core";
import Category from "../../Models/Category/Category";
import axios from "axios";
interface CategoryModel extends Category {
  _id: string;
}
interface CategoryProps {
  category: CategoryModel;
}
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "10em",
      height: "15em",
      margin: "2em",
      boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
      padding: "2em",
    },
    name: {
      color: "#0170ff",
      fontWeight: 1000,
      textTransform: "capitalize",
      fontSize: "1.5em",
      marginLeft: "5%",
      marginTop: "5%",
    },
    image: { width: "100%", height: "60%" },
    information: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
    },
    price: {
      fontWeight: "bold",
    },
    description: {
      textTransform: "capitalize",
    },
  })
);
const CategoryItem = (props: CategoryProps) => {
  const classes = useStyles(props);
  console.log(`${axios.defaults.baseURL}${props.category.categoryImage}`);
  return (
    <Grid className={classes.root} key={props.category.id}>
      <Grid className={classes.image}>
        <img
          src={`${axios.defaults.baseURL}${props.category.categoryImage}`}
          width="100%"
          height="100%"
        />
      </Grid>
      <Grid className={classes.information}>
        <Grid className={classes.name}>{props.category.name}</Grid>
      </Grid>
    </Grid>
  );
};
export default CategoryItem;
