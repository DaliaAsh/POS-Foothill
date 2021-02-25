import * as actionTypes from "./actionTypes";
import Product from "../../Models/Product/Product";
import axios from "axios";
interface ProductModel extends Product {
  _id: string;
}
export const addProductHandler = (products: ProductModel[]) => {
  return { type: actionTypes.ADD_PRODUCT, products: products };
};
export const addProduct = (product: Product, products: ProductModel[]) => {
  const submittedProduct: FormData = new FormData();
  submittedProduct.append("id", JSON.stringify(Date.now()));
  submittedProduct.append("name", product.name);
  submittedProduct.append("rawPrice", JSON.stringify(product.rawPrice));
  submittedProduct.append("price", JSON.stringify(product.price));
  submittedProduct.append("code", product.code);
  submittedProduct.append("supplier", product.supplier);
  submittedProduct.append("category", product.category);
  submittedProduct.append("stockCount", JSON.stringify(product.productUnit));
  submittedProduct.append("taxMethod", product.taxMethod);
  submittedProduct.append(
    "alertQuantity",
    JSON.stringify(product.alertQuantity)
  );
  submittedProduct.append("productDescription", product.description);
  submittedProduct.append("productImage", product.productImage);
  const newProduct: ProductModel = {
    _id: Date.now().toString(),
    id: Date.now(),
    name: product.name,
    rawPrice: product.rawPrice,
    price: product.price,
    code: product.code,
    supplier: product.supplier,
    category: product.category,
    productUnit: product.productUnit,
    taxMethod: product.taxMethod,
    alertQuantity: product.alertQuantity,
    description: product.description,
    productImage: product.productImage,
  };
  const updatedProducts: ProductModel[] = [...products, newProduct];
  return (dispatch) => {
    axios.post("product", submittedProduct).then(() => {
      dispatch(addProductHandler(updatedProducts));
    });
  };
};
export const setProducts = (products) => {
  return { type: actionTypes.FETCH_PRODUCTS, products: products };
};
export const fetchProducts = () => {
  return (dispatch) => {
    return axios.get("/product").then((result) => {
      console.log(result.data);
      dispatch(setProducts(result.data.products));
    });
  };
};
export const deleteProductHandler = (products: ProductModel[]) => {
  return { type: actionTypes.DELETE_PRODUCT, products: products };
};
export const deleteProductById = (
  productId: number,
  products: ProductModel[]
) => {
  return (dispatch) => {
    axios
      .delete(`product/${productId}`)
      .then(() => {
        dispatch(
          deleteProductHandler(
            products.filter((product: ProductModel) => {
              return product.id !== productId;
            })
          )
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const pushProductsByCategoryName = (
  categoryName: string,
  products: ProductModel[],
  all: boolean
) => {
  console.log(categoryName);
  console.log(products);
  if (all) {
    return {
      type: actionTypes.PUSH_PRODUCTS_BY_CATEGORY,
      selectedProducts: products,
    };
  }
  const selectedProducts = products.filter((product: ProductModel) => {
    return product.category === categoryName;
  });
  return {
    type: actionTypes.PUSH_PRODUCTS_BY_CATEGORY,
    selectedProducts: selectedProducts,
  };
};
