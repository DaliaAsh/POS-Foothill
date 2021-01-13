import React from "react";
import Table from "../../../../components/UI/Table/Table";
import ProductPageContainer from "../../../../components/UI/PageContainer/PageContainer";
import AddProductButton from "../../../../components/UI/AddButton/AddButton";
import Dialog from "../../../../components/UI/Form/FormDialog";
import useProductHook from "./useProductHook";
import Spinner from "../../../../components/UI/Spinner/Spinner";
const Product = () => {
  const {
    productRows,
    dialogContent,
    dialogTitle,
    openDialog,
    loading,
    handleOpenAddProductDialog,
    closeDialogHandler,
    submitDialogHandler,
  } = useProductHook();
  let columnNames: string[] = [
    "code",
    "name",
    "category",
    "productDescription",
    "taxMethod",
    "price",
    "action",
  ];
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <ProductPageContainer>
        <Dialog
          title={dialogTitle}
          open={openDialog}
          handleCloseDialog={closeDialogHandler}
          handleDialogSubmit={() => {
            submitDialogHandler();
            closeDialogHandler();
          }}
        >
          {dialogContent}
        </Dialog>

        <Table rows={productRows} columnNames={columnNames} tableWidth="95%" />

        <AddProductButton onClick={handleOpenAddProductDialog} marginLeft="15%">
          Add Product
        </AddProductButton>
      </ProductPageContainer>
    );
  }
};
export default Product;
