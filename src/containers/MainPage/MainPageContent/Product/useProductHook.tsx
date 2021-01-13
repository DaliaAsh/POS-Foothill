import React, { useState, useRef, useEffect } from "react";
import { ProductRowModel } from "../../../../Models/Product/ProductRowModel";
import IconActions from "../../../../components/UI/IconsAction/IconsAction";
import Dialog from "../../../../components/UI/Form/FormDialog";
import axios from "axios";
import IconsAction from "../../../../components/UI/IconsAction/IconsAction";
import Image from "material-ui-image";
import ProductFields from "../../../../Models/Product/Product";
import { Grid } from "@material-ui/core";
interface ProductDetails {
  image: string;
  name: string;
}
const useProductHook = () => {
  const [dialogContent, setDialogContent] = useState<JSX.Element>();
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [dialogTitle, setDialogTitle] = useState<string>("");
  const [productRows, setProductRows] = useState<ProductRowModel[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [imageFile, setImageFile] = useState(null);
  const [pageSize, setPageSize] = useState<number>(2);
  const code = useRef(null);
  const name = useRef(null);
  const type = useRef(null);
  const category = useRef(null);
  const supplier = useRef(null);
  const taxMethod = useRef(null);
  const purchasePrice = useRef(null);
  const price = useRef(null);
  const tax = useRef(null);
  const productDescription = useRef(null);
  const productUnit = useRef(null);
  const alertQuantity = useRef(null);
  const [serverRequest, setServerRequest] = useState<boolean>(false);
  useEffect(() => {
    let products: ProductRowModel[] = [];
    axios
      .get("product")
      .then((result) => {
        console.log(result.data.products);
        result.data.products.map((productItem: ProductFields) => {
          const actionIcons = (
            <>
              <IconActions.ClearAction
                handleDeleteItemById={() => deleteProductById(productItem.id)}
              />
              <IconActions.EditAction
                handleEditItemById={() => editProductById(productItem.id)}
              />
              <IconActions.ModifyStockAction
                handleModifyStockItemById={() =>
                  modifyProductBStockyId(productItem.id)
                }
              />
              <IconActions.PrintBarCodeAction
                handlePrintBarCodeItemById={() =>
                  printBarCodeProductById(productItem.id)
                }
              />
              <IconActions.ViewProductAction
                handleViewProductItemById={() =>
                  viewImageProductById(productItem.id)
                }
              />
              <IconsAction.ViewImageAction
                handleViewImageItemById={() =>
                  getProductDetails(productItem.id)
                }
              />
            </>
          );
          let product: ProductRowModel = {
            productId: productItem.id,
            name: productItem.name,
            purchasePrice: productItem.rawPrice,
            price: productItem.price,
            code: productItem.code,
            taxMethod: productItem.taxMethod,
            category: productItem.category,
            alertQuantity: productItem.alertQuantity,
            productUnit: productItem.productUnit,
            supplier: productItem.supplier,
            action: actionIcons,
            productDescription: productItem.productDescription,
          };
          products.push(product);
        });
      })
      .then(() => {
        setProductRows(products);
        setLoading(false);
      });
    let categoriesNames = [];
    axios
      .get("category")
      .then((result) => {
        result.data.categories.map((category) => {
          categoriesNames.push(category.name);
        });
      })
      .then(() => {
        setCategories(categoriesNames);
      });
  }, [serverRequest]);
  const handleOpenAddProductDialog = () => {
    configureDialogTitle("Add Product");
    configureDialogContent(
      <>
        <Dialog.SelectInput
          inputLabel="Type"
          options={["Standard", "Service", "combination"]}
          inputValue={type}
        />

        <Dialog.TextInput inputLabel="Code" inputValue={code} />

        <Dialog.TextInput inputLabel="Name" inputValue={name} />
        <Dialog.SelectInput
          inputLabel="Category"
          options={categories}
          inputValue={category}
        />
        <Dialog.SelectInput
          inputLabel="Supplier"
          options={["supplier01", "supplier02"]}
          inputValue={supplier}
        />
        <Dialog.NumberInput
          inputLabel="Purchase Price (USD)"
          inputValue={purchasePrice}
        />
        <Dialog.NumberInput inputLabel="tax (%)" inputValue={tax} />
        <Dialog.SelectInput
          inputLabel="Tax Method"
          options={["inclusive", "exclusive"]}
          inputValue={taxMethod}
        />
        <Dialog.NumberInput inputLabel="Price (USD)" inputValue={price} />
        <Dialog.NumberInput
          inputLabel="Product Unit"
          inputValue={productUnit}
        />
        <Dialog.NumberInput
          inputLabel="Alert Quantity"
          inputValue={alertQuantity}
        />
        <Dialog.TextAreaInput
          inputLabel="Product Description"
          inputValue={productDescription}
        />
        <Dialog.ImageInput handleUploadImage={uploadImageHandler} />
        <Dialog.SubmitCloseButtons handleDialogClose={closeDialogHandler} />
      </>
    );
    openDialogHandler();
  };
  const closeDialogHandler = () => {
    setOpenDialog(false);
  };
  const openDialogHandler = () => {
    setOpenDialog(true);
  };
  const deleteProductById = (categoryId: number) => {
    axios.delete(`product/${categoryId}`).then(() => {
      setServerRequest((oldRequest) => !oldRequest);
    });
  };
  const getProductDetails = (productId: number): void => {
    axios
      .get(`product/${productId}`)
      .then((result) => {
        const productDetails = {
          image: `${axios.defaults.baseURL}/${result.data.product[0].productImage}`,
          name: result.data.product[0].name,
        };
        openImageDialog(productDetails);
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  };
  const openImageDialog = (productDetails: ProductDetails): void => {
    configureDialogTitle(productDetails.name);
    const viewImageDialogContent = (
      <Image src={productDetails.image} aspectRatio={16 / 9} />
    );
    configureDialogContent(viewImageDialogContent);
    openDialogHandler();
  };
  const uploadImageHandler = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
    console.log(file);
  };
  const editProductById = (productId: number) => {};
  const openViewProductByIdDialog = (productId: number) => {
    openDialogHandler();
  };
  const modifyProductBStockyId = (productId: number) => {
    alert(productId);
  };
  const printBarCodeProductById = (productId: number) => {
    alert(productId);
  };
  const viewImageProductById = (productId: number) => {
    alert(productId);
  };
  const configureDialogTitle = (title: string) => {
    setDialogTitle(title);
  };
  const configureDialogContent = (content: JSX.Element) => {
    setDialogContent(content);
  };
  const submitDialogHandler = () => {
    const submittedProduct = new FormData();
    submittedProduct.append("id", JSON.stringify(Date.now()));
    submittedProduct.append("name", name.current.value);
    submittedProduct.append("rawPrice", purchasePrice.current.value);
    submittedProduct.append("price", price.current.value);
    submittedProduct.append("code", code.current.value);
    submittedProduct.append("supplier", supplier.current.value);
    submittedProduct.append("category", category.current.value);
    submittedProduct.append("productUnit", productUnit.current.value);
    submittedProduct.append("taxMethod", taxMethod.current.value);
    submittedProduct.append("alertQuantity", alertQuantity.current.value);
    submittedProduct.append(
      "productDescription",
      productDescription.current.value
    );
    submittedProduct.append("productImage", imageFile);
    axios
      .post("product", submittedProduct)
      .then((result) => {
        console.log("dalia");
        setServerRequest(!serverRequest);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return {
    productRows,
    dialogContent,
    dialogTitle,
    openDialog,
    loading,
    handleOpenAddProductDialog,
    closeDialogHandler,
    submitDialogHandler,
  };
};
export default useProductHook;
