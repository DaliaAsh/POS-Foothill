import React, { useState } from "react";
import useCategoriesHook from "./useCategoriesHook";
import Table from "../../../../components/UI/Table/Table";
import AddCategoryButton from "../../../../components/UI/AddButton/AddButton";
import Dialog from "../../../../components/UI/Form/FormDialog";
import CategoryPageContainer from "../../../../components/UI/PageContainer/PageContainer";
import Spinner from "../../../../components/UI/Spinner/Spinner";
import * as categoriesActions from "../../../../store/actions/categories";
import { connect } from "react-redux";
import Category from "../../../../Models/Category/Category";
import { History } from "history";
interface CategoryModel extends Category {
  _id: string;
}
interface CategoriesProps {
  onInitCategories: () => void;
  onDeleteCategory: (categoryId: number, categories: CategoryModel[]) => void;
  onAddCategory: (category: FormData, categories: CategoryModel[]) => void;
  history: History;
  categories: CategoryModel[];
  loading: boolean;
}
const Categories = (props: CategoriesProps) => {
  const {
    dialogTitle,
    dialogContent,
    openDialog,
    closeDialogHandler,
    submitDialogHandler,
    handleOpenAddCategoryDialog,
    transformCategoriesToCategoriesRows,
  } = useCategoriesHook(props);
  const categoriesColumnNames: string[] = ["categoryName", "action"];
  if (props.loading) {
    return <Spinner />;
  } else {
    console.log("After using redux-thunk", props.categories);
    return (
      <CategoryPageContainer>
        <Dialog
          title={dialogTitle}
          open={openDialog}
          handleCloseDialog={closeDialogHandler}
          handleDialogSubmit={(event) => submitDialogHandler(event)}
        >
          {dialogContent}
        </Dialog>
        <Table
          rows={transformCategoriesToCategoriesRows(props.categories)}
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
const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories,
    loading: state.categories.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onInitCategories: () => dispatch(categoriesActions.fetchCategories()),
    onDeleteCategory: (categoryId: number, categories: CategoryModel[]) =>
      dispatch(categoriesActions.deleteCategoryById(categoryId, categories)),
    onAddCategory: (category, categories) =>
      dispatch(categoriesActions.addCategory(category, categories)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
