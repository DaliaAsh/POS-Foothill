import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Spinner from "../../../../components/UI/Spinner/Spinner";
import ReportsPageContainer from "../../../../components/UI/PageContainer/PageContainer";
import { Grid, makeStyles, createStyles, Paper } from "@material-ui/core";
import ReportCard from "../../../../components/UI/ReportCard";
import GroupIcon from "@material-ui/icons/Group";
import CategoryIcon from "@material-ui/icons/Category";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import useReports from "./useReports";
import Category from "../../../../Models/Category/Category";
import ProductFields from "../../../../Models/Product/Product";
import User from "../../../../Models/User";
import {
  Chart,
  PieSeries,
  Title,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";
import * as categoriesActions from "../../../../store/actions/categories";
import * as productsActions from "../../../../store/actions/products";
import * as usersActions from "../../../../store/actions/users";
interface CategoryModel extends Category {
  _id: string;
}
interface ProductModel extends ProductFields {
  _id: string;
}
interface ReportsProps {
  categories: CategoryModel[];
  loading: boolean;
  products: ProductModel[];
  users: User[];
  loadingUsers: boolean;
  onInitCategories: () => void;
  onInitProducts: () => void;
  onInitUsers: () => void;
}

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      width: "100%",
      height: "100vh",
      display: "flex",
      flexWrap: "wrap",
      "@media (max-width:680px)": {
        justifyContent: "center",
      },
    },
    icon: {
      color: "#ffffffff",
      width: "100%",
      height: "100%",
    },
    reportCards: {
      display: "flex",
      flexWrap: "wrap",
    },
    chart: {
      width: "60%",
      marginLeft: "5%",
      "@media (max-width:680px)": {
        width: "80%",
      },
    },
    chartText: {
      display: "flex",
      flexDirection: "column",
      marginTop: "20%",
      marginLeft: "5%",
      width: "40%",
    },
    explain: {
      color: "white",
      fontSize: "1em",
      marginTop: "1.5em",
      marginLeft: "1em",
      "@media (max-width:680px)": {
        display: "none",
      },
    },
    header: {
      color: "white",
      fontSize: "3em",
    },
    chartContainer: {
      display: "flex",
      flexDirection: "row-reverse",
    },
    productsHeader: {
      color: "#f06695",
      fontSize: "2em",
    },
    productsList: {
      color: "#f06695",
    },
    products: {},
  })
);
const Reports = (props: ReportsProps) => {
  console.log(PieSeries);
  const classes = useStyles();
  const { data, wait } = useReports(props);
  return (
    <ReportsPageContainer>
      <Grid className={classes.container}>
        {wait ? (
          <Spinner />
        ) : (
          <Grid className={classes.reportCards}>
            <ReportCard
              bgColor="#1abc9c"
              number={props.users.length}
              title="Clients"
              Icon={<GroupIcon className={classes.icon} />}
            />

            <ReportCard
              bgColor="#fb6e52"
              number={props.products.length}
              title="Products"
              Icon={<LocalMallIcon className={classes.icon} />}
            />
            <ReportCard
              bgColor="#11a7db"
              number={props.categories.length}
              title="Categories"
              Icon={<CategoryIcon className={classes.icon} />}
            />
          </Grid>
        )}
        <Grid className={classes.chartContainer}>
          <Grid className={classes.chartText}>
            <Grid className={classes.header}>Categories</Grid>
            <Grid className={classes.explain}>
              Categories chart shows the most demanded categories based on the
              number of products on each category
            </Grid>
          </Grid>
          <Grid className={classes.chart}>
            {data ? (
              <Chart data={data}>
                <PieSeries
                  valueField="productsNumber"
                  argumentField="categoryName"
                />
                <Animation />
              </Chart>
            ) : null}
          </Grid>
        </Grid>

        <Grid className={classes.products}>
          <Grid className={classes.productsHeader}>
            3 Most Demanded Products
          </Grid>
          <ul className={classes.productsList}>
            <li>d</li>
            <li>a</li>
            <li>l</li>
          </ul>
        </Grid>
      </Grid>
    </ReportsPageContainer>
  );
};
const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories,
    loading: state.categories.loading,
    products: state.products.products,
    users: state.users.users,
    loadingUsers: state.users.loadingUsers,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onInitCategories: () => dispatch(categoriesActions.fetchCategories()),
    onInitProducts: () => dispatch(productsActions.fetchProducts()),
    onInitUsers: () => dispatch(usersActions.fetchUsers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Reports);
