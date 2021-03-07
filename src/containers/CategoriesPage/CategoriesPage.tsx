import React, { useEffect } from "react";
import { Grid, makeStyles, createStyles } from "@material-ui/core";
import { connect } from "react-redux";
import * as categoriesActions from "../../store/actions/categories";
import CategoryFields from "../../Models/Category/Category";
import Category from "./Category";
interface CategoryModel extends CategoryFields {
  _id: string;
}
interface CategoryPageProps {
  categories: CategoryModel[];
  onInitCategories: () => void;
}
const useStyles = makeStyles(() =>
  createStyles({
    header: {
      color: "#0170ff",
      marginLeft: "5%",
      marginTop: "5%",
      fontWeight: 1000,
      fontSize: "2.5em",
    },
    categoriesGrid: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "left",
      "@media(max-width:680px)": {
        justifyContent: "center",
      },
    },
  })
);
const CategoriesPage = (props: CategoryPageProps) => {
  useEffect(() => {
    props.onInitCategories();
  }, []);
  const classes = useStyles();
  console.log(props.categories);
  return (
    <>
      <Grid>
        <Grid className={classes.header}>Categories</Grid>
        <Grid className={classes.categoriesGrid}>
          {props.categories.map((category: CategoryModel) => {
            return <Category category={category} />;
          })}
        </Grid>
      </Grid>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onInitCategories: () => dispatch(categoriesActions.fetchCategories()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CategoriesPage);
