import React, { useState } from "react";
import useCategoriesHook from "./useCategoriesHook";
import Table from "../../../../components/UI/Table/Table";
import AddCategoryButton from "../../../../components/UI/AddButton/AddButton";
import Dialog from "../../../../components/UI/Form/FormDialog";
import CategoryPageContainer from "../../../../components/UI/PageContainer/PageContainer";
import Spinner from "../../../../components/UI/Spinner/Spinner";
const Categories = (props) => {
  const {
    categoriesRows,
    dialogTitle,
    dialogContent,
    openDialog,
    handleOpenAddCategoryDialog,
    closeDialogHandler,
    submitDialogHandler,
    loading,
  } = useCategoriesHook(props);
  const categoriesColumnNames: string[] = [
    "categoryName",
    "createdAt",
    "action",
  ];
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <CategoryPageContainer>
        <Dialog
          title={dialogTitle}
          open={openDialog}
          handleCloseDialog={closeDialogHandler}
          handleDialogSubmit={() => {
            submitDialogHandler();
          }}
        >
          {dialogContent}
        </Dialog>
        <Table
          rows={categoriesRows}
          columnNames={categoriesColumnNames}
          tableWidth="70%"
        />
        <AddCategoryButton
          onClick={handleOpenAddCategoryDialog}
          marginLeft="25%"
        >
          Add Category
        </AddCategoryButton>
      </CategoryPageContainer>
    );
  }
};
export default Categories;
