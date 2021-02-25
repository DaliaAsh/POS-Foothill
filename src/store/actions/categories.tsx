import * as actionTypes from "./actionTypes";
import axios from "axios";
import Category from "../../Models/Category/Category";
interface CategoryModel extends Category {
  _id: string;
}
export const addCategoryHandler = (categories: CategoryModel[]) => {
  return { type: actionTypes.ADD_CATEGORY, categories: categories };
};
export const editCategoryHandler = () => {
  return { type: actionTypes.EDIT_CATEGORY };
};
export const editCategoryById = (categoryId, updatedCategoryName: string) => {
  return (dispatch) => {
    axios
      .put(`/category/${categoryId}`, [
        { propName: "name", value: updatedCategoryName },
      ])
      .then(() => {
        dispatch(editCategoryHandler());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
export const addCategory = (
  category: FormData,
  categories: CategoryModel[]
) => {
  return (dispatch) => {
    const newCategory: CategoryModel = {
      _id: Date.now().toString(),
      id: Number(category.get("id")),
      name: category.get("name").toString(),
      categoryImage: category.get("categoryImage").toString(),
    };
    let updatedCategories: CategoryModel[] = [...categories, newCategory];
    axios
      .post("category", category)
      .then((result) => {
        console.log(result.data);
        dispatch(addCategoryHandler(updatedCategories));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
export const deleteCategory = (categories: CategoryModel[]) => {
  return { type: actionTypes.DELETE_CATEGORY, categories: categories };
};
export const deleteCategoryById = (
  categoryId: number,
  categories: CategoryModel[]
) => {
  return (dispatch) => {
    axios.delete(`category/${categoryId}`).then(() => {
      dispatch(
        deleteCategory(
          categories.filter((category: CategoryModel) => {
            return category.id !== categoryId;
          })
        )
      );
    });
  };
};
export const setCategories = (categories: CategoryModel[]) => {
  return { type: actionTypes.SET_CATEGORIES, categories: categories };
};
export const fetchCategories = () => {
  return (dispatch) => {
    return axios.get("category").then((result) => {
      dispatch(setCategories(result.data.categories));
    });
  };
};
