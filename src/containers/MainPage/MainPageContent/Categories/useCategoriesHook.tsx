import React, { useEffect, useState, useRef } from "react";
import Dialog from "../../../../components/UI/Form/FormDialog";
import { History } from "history";
import Image from "material-ui-image";
import axios from "axios";
import { CategoryRowModel } from "../../../../Models/Category/CategoryRowModel";
import Category from "../../../../Models/Category/Category";
import IconsAction from "../../../../components/UI/IconsAction/IconsAction";
interface CategoryDetails {
  image: string;
  name: string;
}
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
const useCategoriesHook = (props: CategoriesProps) => {
  const [dialogContent, setDialogContent] = useState<JSX.Element>();
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [dialogTitle, setDialogTitle] = useState<string>("");
  const [imageFile, setImageFile] = useState(null);
  const categoryName = useRef(null);
  useEffect(() => {
    props.onInitCategories();
  }, []);

  const uploadImageHandler = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
    console.log(file);
  };
  const closeDialogHandler = () => {
    setOpenDialog(false);
  };
  const openDialogHandler = () => {
    setOpenDialog(true);
  };
  const configureDialogTitle = (title: string) => {
    setDialogTitle(title);
  };
  const configureDialogContent = (content: JSX.Element) => {
    setDialogContent(content);
  };
  const deleteCategoryById = (categoryId: number) => {
    props.onDeleteCategory(categoryId, props.categories);
  };
  const openImageDialog = (categoryDetails: CategoryDetails): void => {
    console.log(categoryDetails.image);
    configureDialogTitle(categoryDetails.name);
    const viewImageDialogContent = (
      <Image src={categoryDetails.image} aspectRatio={16 / 9} />
    );
    configureDialogContent(viewImageDialogContent);
    openDialogHandler();
  };

  const navigateToEditPage = (categoryId: number, categoryName: string) => {
    props.history.push({
      pathname: "/main/edit-category",
      state: { categoryId: categoryId, categoryName: categoryName },
    });
  };
  const transformCategoriesToCategoriesRows = (categories: CategoryModel[]) => {
    let categoriesRows: CategoryRowModel[] = [];
    categories.map((categoryItem: CategoryModel) => {
      console.log(categoryItem);
      const categoryDetails: CategoryDetails = {
        name: categoryItem.name,
        image: `${axios.defaults.baseURL}${categoryItem.categoryImage}`,
      };
      let actionIcons = (
        <>
          <IconsAction.ClearAction
            handleDeleteItemById={() => deleteCategoryById(categoryItem.id)}
          />
          <IconsAction.EditAction
            handleEditItemById={() =>
              navigateToEditPage(categoryItem.id, categoryItem.name)
            }
          />
          <IconsAction.ViewImageAction
            handleViewImageItemById={() => openImageDialog(categoryDetails)}
          />
        </>
      );
      let category: CategoryRowModel = {
        categoryId: categoryItem.id,
        categoryName: categoryItem.name,
        categoryImage: categoryItem.categoryImage,
        action: actionIcons,
      };
      categoriesRows.push(category);
    });
    return categoriesRows;
  };
  const submitDialogHandler = (event) => {
    event.preventDefault();
    const category = new FormData();
    category.append("id", JSON.stringify(Date.now()));
    category.append("name", categoryName.current.value);
    console.log(imageFile);
    category.append("categoryImage", imageFile);
    props.onAddCategory(category, props.categories);
    closeDialogHandler();
  };
  const handleOpenAddCategoryDialog = () => {
    configureDialogTitle("Add Category");
    configureDialogContent(
      <>
        <Dialog.TextInput
          inputLabel="Category Name"
          inputValue={categoryName}
        />
        <Dialog.ImageInput handleUploadImage={uploadImageHandler} />
        <Dialog.SubmitCloseButtons handleDialogClose={closeDialogHandler} />
      </>
    );
    openDialogHandler();
  };
  return {
    dialogContent,
    dialogTitle,
    openDialog,
    closeDialogHandler,
    submitDialogHandler,
    handleOpenAddCategoryDialog,
    transformCategoriesToCategoriesRows,
  };
};
export default useCategoriesHook;
