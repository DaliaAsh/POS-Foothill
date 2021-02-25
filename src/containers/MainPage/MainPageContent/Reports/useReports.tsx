import axios from "axios";
import React, { useEffect, useState } from "react";
import Category from "../../../../Models/Category/Category";
import ProductFields from "../../../../Models/Product/Product";
import User from "../../../../Models/User";
interface CategoryModel extends Category {
  _id: string;
}
interface ProductModel extends ProductFields {
  _id: string;
}
interface ChartData {
  categoryName: string;
  productsNumber: number;
}
interface ReportsProps {
  categories: CategoryModel[];
  products: ProductModel[];
  loading: boolean;
  users: User[];
  onInitCategories: () => void;
  onInitProducts: () => void;
  onInitUsers: () => void;
}
const useReports = (props: ReportsProps) => {
  const [data, setData] = useState<ChartData[]>();
  const [wait, setWait] = useState<boolean>(true);
  useEffect(() => {
    let initialData: ChartData[] = [];
    console.log("send");
    axios
      .all([
        props.onInitProducts(),
        props.onInitUsers(),
        props.onInitCategories(),
      ])
      .then(() => {
        console.log(props.categories);
        console.log(props.products);
        console.log(props.users);
        props.categories.map((category: CategoryModel) => {
          initialData.push({
            categoryName: category.name,
            productsNumber: 0,
          });
        });
        props.products.map((product: ProductModel) => {
          const itemIndex: number = initialData.findIndex(
            (sample: ChartData) => {
              return product.category === sample.categoryName;
            }
          );
          const item: ChartData = initialData[itemIndex];
          initialData.splice(itemIndex, 1, {
            categoryName: item.categoryName,
            productsNumber: item.productsNumber + 1,
          });
        });
        setWait(false);
      })
      .then(() => {
        setData(initialData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return { data, wait };
};
export default useReports;
