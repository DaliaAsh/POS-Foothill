import React from "react";
import SubmitButton from "../components/UI/AddButton/AddButton";
export default {
  title: "SubmitButton/SubmitButtonComponent",
  component: SubmitButton,
};
const Template = (args) => <SubmitButton {...args}>Submit</SubmitButton>;
export const MyButton = Template.bind({});
MyButton.args = {
  backgroundColor: "#34495e",
};
