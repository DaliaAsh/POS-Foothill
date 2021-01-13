import React from "react";
import CategoryTab from "./CategoryTab";
import Spinner from "../../UI/Spinner/Spinner";
import { connect } from "react-redux";
import axios from "axios";
import CategoryModel from "../../../Models/Category/Category";
import Product from "../../../Models/Product/Product";
import * as actionTypes from "../../../store/actions";
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
}
interface Props {
  onFetchProductsByCategoryName: (products: ProductModel[]) => void;
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
  state = {
    loading: true,
    categories: [],
    clickedId: 0,
  };
  componentDidMount() {
    axios.get("/category").then((result) => {
      this.setState({ loading: false, categories: result.data.categories });
      console.log(result.data.categories);
    });
  }
  render() {
    if (this.state.loading) {
      return <Spinner />;
    } else {
      return (
        <CategoriesTabGrid item>
          {this.state.categories.map((category: Category) => {
            return (
              <CategoryTab
                key={category.id}
                tabClicked={this.state.clickedId !== category.id ? false : true}
                categoryName={category.name}
                clickTabHandler={() => {
                  this.setState({ clickedId: category.id });
                  let filteredProducts: ProductModel[] = [];
                  axios
                    .get("/product")
                    .then((result) => {
                      filteredProducts = result.data.products.filter(
                        (product: ProductModel) => {
                          return product.category === category.name;
                        }
                      );
                    })
                    .then(() => {
                      this.props.onFetchProductsByCategoryName(
                        filteredProducts
                      );
                    });
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
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchProductsByCategoryName: (products: ProductModel[]) =>
      dispatch({
        type: actionTypes.PUSH_PRODUCTS_BY_CATEGORY,
        products: products,
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CategoriesTab);
