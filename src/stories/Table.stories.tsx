import React from "react";
import Table from "../components/UI/Table/Table";
export default {
  title: "Table/Table",
  component: Table,
};
const Template = (args) => <Table {...args} />;
export const MyTable = Template.bind({});
function createData(
  id:number ,
  code: number,
  name: string,
  category: number,
  productDescription: string,
  tax: number,
  price: number,
  action: string[]
) {
  return { id,code, name, category, productDescription, tax, price, action };
}

const rowValues= [
  createData(1,159, "Frozen yoghurt", 5, "frozen", 6.0, 24, ["view"]),
  createData(2,237, "Ice cream sandwich", 4, "delicous", 4, 9.0, ["view"]),
];
MyTable.args = {
  rows: rowValues,
};
