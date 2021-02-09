import React, { useState } from "react";
import useCategoriesHook from "./useCategoriesHook";
import Table from "../../../../components/UI/Table/Table";
import AddCategoryButton from "../../../../components/UI/AddButton/AddButton";
import Dialog from "../../../../components/UI/Form/FormDialog";
import CategoryPageContainer from "../../../../components/UI/PageContainer/PageContainer";
import Spinner from "../../../../components/UI/Spinner/Spinner";
import * as categoriesActions from "../../../../store/actions/categories";
import { connect } from "react-redux";
import { makeStyles, createStyles } from "@material-ui/core";
import { History } from "history";
import Category from "../../../../Models/Category/Category";
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
const useStyles = makeStyles(() =>
  createStyles({
    header: {
      color: "#33b2e5",
      marginLeft: "15%",
      marginBottom: "-2%",
    },
  })
);
const Categories = (props: CategoriesProps) => {
  const classes = useStyles();
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
        <h1 className={classes.header}>Categories</h1>
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
