import React from "react";
import Table from "../../../../components/UI/Table/Table";
import ProductPageContainer from "../../../../components/UI/PageContainer/PageContainer";
import AddProductButton from "../../../../components/UI/AddButton/AddButton";
import Dialog from "../../../../components/UI/Form/FormDialog";
import useProductHook from "./useProductHook";
import Spinner from "../../../../components/UI/Spinner/Spinner";
import Category from "../../../../Models/Category/Category";
import * as categoriesActions from "../../../../store/actions/categories";
import * as productsActions from "../../../../store/actions/products";
import ProductFields from "../../../../Models/Product/Product";
import { connect } from "react-redux";
interface CategoryModel extends Category {
  _id: string;
}
interface ProductModel extends ProductFields {
  _id: string;
}
interface ProductPageProps {
  categories: CategoryModel[];
  onInitCategories: () => void;
  onAddProduct: (product: ProductFields, products: ProductFields[]) => void;
  onInitProducts: () => void;
  onDeleteProduct: (productId: number, products: ProductModel[]) => void;
  products: ProductModel[];
  loading: boolean;
}
const Product = (props: ProductPageProps) => {
  const {
    dialogContent,
    dialogTitle,
    openDialog,
    handleOpenAddProductDialog,
    closeDialogHandler,
    submitDialogHandler,
    transformProductsToProductsRowModel,
  } = useProductHook(props);
  let columnNames: string[] = [
    "code",
    "name",
    "category",
    "description",
    "taxMethod",
    "price",
    "action",
  ];
  if (props.loading) {
    return <Spinner />;
  } else {
    return (
      <ProductPageContainer>
        <Dialog
          title={dialogTitle}
          open={openDialog}
          handleCloseDialog={closeDialogHandler}
          handleDialogSubmit={(event) => {
            submitDialogHandler(event);
            closeDialogHandler();
          }}
        >
          {dialogContent}
        </Dialog>

        <Table
          rows={transformProductsToProductsRowModel(props.products)}
          columnNames={columnNames}
          tableWidth="95%"
        />

        <AddProductButton onClick={handleOpenAddProductDialog} marginLeft="15%">
          Add Product
        </AddProductButton>
      </ProductPageContainer>
    );
  }
};
const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories,
    products: state.products.products,
    loading: state.products.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onInitCategories: () => dispatch(categoriesActions.fetchCategories()),
    onAddProduct: (product: ProductFields, products: ProductModel[]) =>
      dispatch(productsActions.addProduct(product, products)),
    onInitProducts: () => dispatch(productsActions.fetchProducts()),
    onDeleteProduct: (productId: number, products: ProductModel[]) =>
      dispatch(productsActions.deleteProductById(productId, products)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
