import React from "react";
import SearchDropDownList from "../components/PosClient/SearchDropDownList/SearchDropDownList";
export default {
  title: "ClientPicker/ClientPickerComponent",
  component: SearchDropDownList,
};
const Template = (args) => <SearchDropDownList {...args} />;
export const MyClientPicker = Template.bind({});
MyClientPicker.args = {};
