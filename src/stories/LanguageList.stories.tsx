import React from "react";
import LanguageList from "../components/Account/LanguageList";
export default {
  title: "LanguageList/LanguageListComponent",
  component: LanguageList,
};
const Template = (args) => <LanguageList {...args} />;
export const MyLanguageList = Template.bind({});
MyLanguageList.args = {};
