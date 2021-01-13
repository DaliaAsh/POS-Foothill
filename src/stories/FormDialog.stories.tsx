import React from "react";
import FormDialog from "../components/UI/Form/FormDialog";
interface FormDialogProps {
  title: string;
  children: JSX.Element;
  open: boolean;
  handleCloseDialog: () => void;
  handleDialogSubmit: () => void;
}
export default {
  title: "FormDialog/FormDialogComponent",
  component: FormDialog,
};
const Template = (args: FormDialogProps) => <FormDialog {...args} />;
export const MyFormDialog = Template.bind({});
MyFormDialog.args = {
  title: "Test Form",
  children: () => {
    let selectRef = React.createRef();
    let textRef = React.createRef();
    return (
      <>
        <FormDialog.SelectInput
          inputLabel="Animals"
          options={["cat", "dog", "bird"]}
          inputValue={selectRef}
        />{" "}
        <FormDialog.TextInput inputLabel="price" inputValue={textRef} />
      </>
    );
  },
  open: true,
  handleCloseDialog: () => {},
};
