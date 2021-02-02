import React from "react";
import CategoryTab from "./CategoryTab";
import Spinner from "../../UI/Spinner/Spinner";
import { connect } from "react-redux";
import CategoryModel from "../../../Models/Category/Category";
import Product from "../../../Models/Product/Product";
import * as categoriesActions from "../../../store/actions/categories";
import * as productsActions from "../../../store/actions/products";
import { Grid, styled } from "@material-ui/core";
interface Category extends CategoryModel {
  _id: string;
}
interface ProductModel extends Product {
  _id: string;
}
interface State {
  loading: boolean;
  categories: Category[];
  clickedId: number;
  products: ProductModel[];
}
interface Props {
  loading: boolean;
  categories: CategoryModel[];
  products: ProductModel[];
  onPushProductsByCategories: (
    categoryName: string,
    products: ProductModel[],
    all: boolean
  ) => void;
  onInitCategories: () => void;
  onInitProducts: () => void;
}
const CategoriesTabGrid = styled(Grid)({
  display: "flex",
  overflowX: "auto",
  "&::-webkit-scrollbar": {
    height: "0.9em",
  },
  "&::-webkit-scrollbar-track": {
    boxShadow: "inset 0 0 5px grey",
    borderRadius: "10px",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#777",
    borderRadius: "10px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#444 ",
  },
});
class CategoriesTab extends React.Component<Props, State> {
  componentDidMount() {
    this.props.onInitCategories();
    this.props.onInitProducts();
  }
  render() {
    if (this.props.loading) {
      return <Spinner />;
    } else {
      return (
        <CategoriesTabGrid item>
          <CategoryTab
            key={Date.now()}
            //    tabClicked={this.state.clickedId !== category.id ? false : true}
            categoryName={"All"}
            clickTabHandler={() => {
              this.props.onPushProductsByCategories(
                "",
                this.props.products,
                true
              );
            }}
          />
          {this.props.categories.map((category: Category) => {
            return (
              <CategoryTab
                key={category.id}
                //    tabClicked={this.state.clickedId !== category.id ? false : true}
                categoryName={category.name}
                clickTabHandler={() => {
                  this.props.onPushProductsByCategories(
                    category.name,
                    this.props.products,
                    false
                  );
                }}
              />
            );
          })}
        </CategoriesTabGrid>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.categories.loading,
    categories: state.categories.categories,
    products: state.products.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    /*onFetchProductsByCategoryName: (products: ProductModel[]) =>
      dispatch(),*/
    onInitCategories: () => dispatch(categoriesActions.fetchCategories()),
    onPushProductsByCategories: (
      categoryName: string,
      products: ProductModel[],
      all: boolean
    ) =>
      dispatch(
        productsActions.pushProductsByCategoryName(categoryName, products, all)
      ),
    onInitProducts: () => dispatch(productsActions.fetchProducts()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CategoriesTab);
