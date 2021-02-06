import React from "react";
import {
  styled,
  DialogTitle,
  Dialog,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
} from "@material-ui/core";
import {
  InputLabel,
  Select,
  Button,
  IconButton,
  TextareaAutosize,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Slide from "@material-ui/core/Slide";
import CloseIcon from "@material-ui/icons/Close";
const SubmitButton = styled(Button)({
  marginBottom: "1em",
  textTransform: "unset",
  backgroundColor: "#555",
  color: "white",
});
const CloseButton = styled(Button)({
  marginBottom: "1em",
  textTransform: "unset",
  backgroundColor: "white",
  color: "black",
  border: "1px solid black",
});
interface SelectInputProps {
  inputLabel: string;
  options: string[];
  inputValue: any;
}
const InputContainer = styled("div")({
  marginBottom: "5%",
});
const CustomizedInputLabel = styled(InputLabel)({
  marginLeft: "10%",
  marginBottom: "1em",
});
const CustomizedSelect = styled(Select)({
  width: "80%",
  marginLeft: "10%",
});
const CustomizedInput = styled(TextField)({
  width: "80%",
  marginLeft: "10%",
});
const CustomizedTextArea = styled(TextareaAutosize)({
  width: "80%",
  marginLeft: "10%",
});
const CustomizedInputImageContainer = styled("input")({
  width: "80%",
  marginLeft: "10%",
});
const CustomizedButtonsContainer = styled("div")({
  width: "30%",
  marginLeft: "10%",
  display: "flex",
  justifyContent: "space-between",
});
const CustomizedDialogTitle = styled(DialogTitle)({
  backgroundColor: "#555",
  color: "white",
  position: "relative",
});
const CustomizedIconButton = styled(IconButton)({
  position: "absolute",
  right: "5%",
  top: "7%",
});
const CustomizedDialogContent = styled("form")({
  padding: "2em",
});
const CustomRadioGroup = styled(RadioGroup)({
  width: "80%",
  marginLeft: "10%",
  display: "flex",
  flexDirection: "row",
});
const CustomFormControlLabel = styled(FormControlLabel)({
  textTransform: "none",
});
interface FormDialogProps {
  title: string;
  children: JSX.Element | JSX.Element[];
  open: boolean;
  handleCloseDialog: () => void;
  handleDialogSubmit: (event) => void;
}
interface TextInputProps {
  inputLabel: string;
  inputValue: any;
}
interface NumberInputProps {
  inputLabel: string;
  inputValue: any;
}
interface TextAreaInputProps {
  inputLabel: string;
  inputValue: any;
}
interface ButtonsProps {
  handleDialogClose: () => void;
}
interface ImageProps {
  handleUploadImage: (event) => void;
}
interface RadioProps {
  inputLabel: string;
  options: string[];
  inputValue: string;
  handleOptionChange: (event) => void;
}
class FormDialog extends React.Component<FormDialogProps> {
  static SelectInput = ({
    inputLabel,
    options,
    inputValue,
  }: SelectInputProps) => (
    <InputContainer>
      <CustomizedInputLabel>{inputLabel}</CustomizedInputLabel>
      <CustomizedSelect native={true} inputRef={inputValue}>
        {options.map((option, index) => (
          <option key={`${option}${index}`}>{option}</option>
        ))}
      </CustomizedSelect>
    </InputContainer>
  );
  static TextInput = ({ inputLabel, inputValue }: TextInputProps) => (
    <InputContainer>
      <CustomizedInputLabel>{inputLabel}</CustomizedInputLabel>
      <CustomizedInput
        placeholder={inputLabel}
        variant="outlined"
        type="text"
        inputRef={inputValue}
        required={true}
      />
    </InputContainer>
  );
  static NumberInput = ({ inputLabel, inputValue }: NumberInputProps) => (
    <InputContainer>
      <CustomizedInputLabel>{inputLabel}</CustomizedInputLabel>
      <CustomizedInput
        placeholder={inputLabel}
        variant="outlined"
        type="number"
        inputRef={inputValue}
        required={true}
      />
    </InputContainer>
  );
  static TextAreaInput = ({ inputLabel, inputValue }: TextAreaInputProps) => (
    <InputContainer>
      <CustomizedInputLabel>{inputLabel}</CustomizedInputLabel>
      <CustomizedTextArea
        placeholder={inputLabel}
        rowsMin={5}
        required={true}
        ref={inputValue}
      />
    </InputContainer>
  );
  static ImageInput = ({ handleUploadImage }: ImageProps) => (
    <InputContainer>
      <CustomizedInputLabel>Input Image</CustomizedInputLabel>
      <CustomizedInputImageContainer
        type="file"
        onChange={(event) => handleUploadImage(event)}
      />
    </InputContainer>
  );
  static SubmitCloseButtons = ({ handleDialogClose }: ButtonsProps) => (
    <CustomizedButtonsContainer>
      <CloseButton onClick={handleDialogClose}>Close</CloseButton>
      <SubmitButton type="submit">Submit</SubmitButton>
    </CustomizedButtonsContainer>
  );
  static RadioInput = ({
    inputLabel,
    options,
    inputValue,
    handleOptionChange,
  }: RadioProps) => (
    <InputContainer>
      <CustomizedInputLabel>{inputLabel}</CustomizedInputLabel>
      <CustomRadioGroup
        value={inputValue}
        onChange={(event) => handleOptionChange(event)}
      >
        {options.map((option: string) => {
          return (
            <CustomFormControlLabel
              value={option}
              control={<Radio />}
              label={option}
            />
          );
        })}
      </CustomRadioGroup>
    </InputContainer>
  );
  render() {
    return (
      <Dialog
        fullWidth={true}
        maxWidth={"sm"}
        open={this.props.open}
        TransitionComponent={Slide}
        transitionDuration={1000}
      >
        <CustomizedDialogTitle>
          <div>{this.props.title}</div>
          <CustomizedIconButton onClick={this.props.handleCloseDialog}>
            <CloseIcon />
          </CustomizedIconButton>
        </CustomizedDialogTitle>
        <CustomizedDialogContent onSubmit={this.props.handleDialogSubmit}>
          {this.props.children}
        </CustomizedDialogContent>
      </Dialog>
    );
  }
}
export default FormDialog;
