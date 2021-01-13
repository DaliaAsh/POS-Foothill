import React, { useEffect, useState, useRef } from "react";
import { CategoryRowModel } from "../../../../Models/Category/CategoryRowModel";
import Dialog from "../../../../components/UI/Form/FormDialog";
import IconsAction from "../../../../components/UI/IconsAction/IconsAction";
import Image from "material-ui-image";
import CategoryFields from "../../../../Models/Category/Category";
import axios from "axios";
interface CategoryDetails {
  image: string;
  name: string;
}
const useCategoriesHook = (props) => {
  const [categoriesRows, setCategoriesRows] = useState<CategoryRowModel[]>([]);
  const [dialogContent, setDialogContent] = useState<JSX.Element>();
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [dialogTitle, setDialogTitle] = useState<string>("");
  const [imageFile, setImageFile] = useState(null);
  const [serverRequest, setServerRequest] = useState<boolean>(false);
  const categoryName = useRef(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let categories: CategoryRowModel[] = [];
    axios
      .get("category")
      .then((result) => {
        result.data.categories.map((categoryItem: CategoryFields) => {
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
                handleViewImageItemById={() =>
                  getCategoryDetails(categoryItem.id)
                }
              />
            </>
          );
          let category: CategoryRowModel = {
            categoryId: categoryItem.id,
            categoryName: categoryItem.name,
            categoryImage: categoryItem.categoryImage,
            createdAt: categoryItem.createdDate,
            action: actionIcons,
          };
          categories.push(category);
        });
      })
      .then(() => {
        setCategoriesRows(categories);
        setLoading(false);
      });
  }, [serverRequest]);
  const navigateToEditPage = (categoryId: number, categoryName: string) => {
    props.history.push({
      pathname: "/main/edit-category",
      state: { categoryId: categoryId, categoryName: categoryName },
    });
  };
  const getCategoryDetails = (categoryId: number): void => {
    axios
      .get(`category/${categoryId}`)
      .then((result) => {
        const categoryDetails = {
          image: `${axios.defaults.baseURL}/${result.data.category[0].categoryImage}`,
          name: result.data.category[0].name,
        };
        openImageDialog(categoryDetails);
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  };
  const openImageDialog = (categoryDetails: CategoryDetails): void => {
    configureDialogTitle(categoryDetails.name);
    const viewImageDialogContent = (
      <Image src={categoryDetails.image} aspectRatio={16 / 9} />
    );
    configureDialogContent(viewImageDialogContent);
    openDialogHandler();
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
  const submitDialogHandler = () => {
    const category = new FormData();
    category.append("categoryId", JSON.stringify(Date.now()));
    category.append("categoryName", categoryName.current.value);
    category.append(
      "createdAt",
      new Date().toJSON().slice(0, 10).replace(/-/g, "/")
    );
    console.log(imageFile);
    category.append("categoryImage", imageFile);
    axios
      .post("category", category)
      .then((result) => {
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteCategoryById = (categoryId: number) => {
    axios.delete(`category/${categoryId}`).then(() => {
      setServerRequest((oldRequest) => !oldRequest);
    });
  };
  return {
    categoriesRows,
    dialogContent,
    dialogTitle,
    openDialog,
    handleOpenAddCategoryDialog,
    closeDialogHandler,
    submitDialogHandler,
    loading,
  };
};
export default useCategoriesHook;
