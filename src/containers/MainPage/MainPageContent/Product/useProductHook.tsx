import React, { useState, useRef, useEffect } from "react";
import { ProductRowModel } from "../../../../Models/Product/ProductRowModel";
import IconActions from "../../../../components/UI/IconsAction/IconsAction";
import Dialog from "../../../../components/UI/Form/FormDialog";
import axios from "axios";
import IconsAction from "../../../../components/UI/IconsAction/IconsAction";
import Image from "material-ui-image";
import ProductFields from "../../../../Models/Product/Product";
import { FormHelperText, FormControl, Grid } from "@material-ui/core";
import Category from "../../../../Models/Category/Category";
interface ProductDetails {
  image: string;
  name: string;
}
interface ProductModel extends ProductFields {
  _id: string;
}
interface CategoryModel extends Category {
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
const extractCategoriesNames = (categories: CategoryModel[]): string[] => {
  return categories.map((category: CategoryModel) => {
    return category.name;
  });
};

const useProductHook = (props: ProductPageProps) => {
  const [dialogContent, setDialogContent] = useState<JSX.Element>();
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [dialogTitle, setDialogTitle] = useState<string>("");
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

  useEffect(() => {
    props.onInitCategories();
    props.onInitProducts();
  }, []);
  const transformProductsToProductsRowModel = (
    products: ProductModel[]
  ): ProductRowModel[] => {
    let transformedProducts: ProductRowModel[] = [];
    products.map((product: ProductModel) => {
      const productDetails: ProductDetails = {
        name: product.name,
        image: `${axios.defaults.baseURL}${product.productImage}`,
      };
      const actionIcons = (
        <>
          <IconActions.ClearAction
            handleDeleteItemById={() => {
              props.onDeleteProduct(product.id, props.products);
            }}
          />
          <IconActions.EditAction handleEditItemById={() => {}} />
          <IconActions.ModifyStockAction handleModifyStockItemById={() => {}} />
          <IconActions.PrintBarCodeAction
            handlePrintBarCodeItemById={() => {}}
          />
          <IconsAction.ViewImageAction
            handleViewImageItemById={() => openImageDialog(productDetails)}
          />
        </>
      );
      delete product._id;
      const newProduct: ProductRowModel = { ...product, action: actionIcons };
      transformedProducts.push(newProduct);
    });
    return transformedProducts;
  };
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
          options={extractCategoriesNames(props.categories)}
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
    /*   axios.delete(`product/${categoryId}`).then(() => {
      setServerRequest((oldRequest) => !oldRequest);
    });*/
  };
  const getProductDetails = (productId: number): void => {
    /*   axios
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
      });*/
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
  const submitDialogHandler = (event) => {
    event.preventDefault();
    const newProduct: ProductFields = {
      id: Date.now(),
      name: name.current.value,
      rawPrice: Number(purchasePrice.current.value),
      price: Number(price.current.value),
      code: code.current.value,
      supplier: supplier.current.value,
      category: category.current.value,
      productUnit: Number(productUnit.current.value),
      taxMethod: taxMethod.current.value,
      alertQuantity: Number(alertQuantity.current.value),
      description: productDescription.current.value,
      productImage: imageFile,
    };
    props.onAddProduct(newProduct, props.products);
  };
  return {
    dialogContent,
    dialogTitle,
    openDialog,
    handleOpenAddProductDialog,
    closeDialogHandler,
    submitDialogHandler,
    transformProductsToProductsRowModel,
  };
};
export default useProductHook;
