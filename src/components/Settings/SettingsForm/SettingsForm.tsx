import React, { useRef } from "react";
import {
  makeStyles,
  createStyles,
  InputBase,
  Theme,
  Checkbox,
  TextareaAutosize,
} from "@material-ui/core";
import SearchDropDownList from "../../PosClient/SearchDropDownList/SearchDropDownList";
import SubmitButton from "../../UI/AddButton/AddButton";
import lightThemeImage from "../../../assets/images/login.jpg";
import SettingsOptions from "../SettingsOptions/SettingsOptions";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      margin: "3%",
      marginLeft: "10%",
    },
    header: {
      color: "#34495e",
      fontSize: "2.5em",
    },
    subHeader: {
      color: "#34495e",
      fontSize: "0.9em",
      marginTop: "0.5%",
    },
    input: {
      padding: theme.spacing(1),
      border: "1px solid #777",
      borderRadius: "0.2em",
      backgroundColor: "white",
      marginTop: "2%",
      boxShadow: "0px 0px 1px 1px #bbb",
    },
    inputFile: {
      padding: theme.spacing(1),
      marginTop: "2%",
    },
    inputFocused: {
      border: "1px solid #5897fb",
      boxShadow: "0px 0px 5px 1px #5897fb",
    },
    inputLabel: {
      color: "#34495e",
      fontWeight: 500,
      fontSize: "0.9em",
    },
    inputForm: {
      display: "flex",
      flexDirection: "column",
      width: "40%",
      marginRight: "5%",
      marginTop: "1em",
      "@media (max-width:800px)": {
        width: "100%",
        margin: "0",
        marginTop: "1em",
      },
    },
    formContainer: {
      display: "flex",
      flexWrap: "wrap",
      marginLeft: "2%",
    },
    discount: {
      display: "flex",
      flexDirection: "column",
      width: "50%",
      marginRight: "5%",
      marginTop: "1em",
      "@media (max-width:800px)": {
        width: "100%",
      },
    },
    tax: {
      display: "flex",
      flexDirection: "column",
      width: "50%",
      marginRight: "5%",
      marginTop: "1em",
      "@media (max-width:800px)": {
        width: "100%",
      },
    },
    discountTaxContainer: {
      display: "flex",
      width: "42%",
      marginRight: "5%",
      justifyContent: "space-around",
      "@media (max-width:800px)": {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        marginTop: "1em",
        margin: "0",
      },
    },
    list: {
      display: "flex",
      flexDirection: "column",
      width: "40%",
      marginTop: "1em",
      marginLeft: "-2%",
      "@media (max-width:800px)": {
        width: "100%",
        margin: "0",
        marginTop: "1em",
      },
    },
    listInput: {
      marginTop: "2%",
    },
    checkBoxInput: {
      display: "flex",
      width: "40%",
      marginRight: "7%",
      marginTop: "1em",
      alignItems: "center",
      "@media (max-width:800px)": {
        width: "100%",
        margin: "0",
        marginTop: "1em",
      },
    },
    textAreaLabel: {
      fontSize: "1.5em",
      color: "#34495e",
    },
    themeImage: {
      backgroundImage: `url(${lightThemeImage})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "10em",
      height: "10em",
      position: "relative",
      marginRight: "5em",
      "&:hover": {
        cursor: "pointer",
      },
      "&:focus": {
        border: "1px solid blue",
      },
    },
    themeText: {
      position: "absolute",
      fontSize: "2em",
      marginTop: "40%",
      color: "white",
    },
    themesContainer: {
      display: "flex",
      justifyContent: "flex-start",
      "@media (max-width:800px)": {
        display: "flex",
        flexDirection: "column",
      },
    },
    themeInputs: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      marginRight: "5%",
      marginTop: "1em",
      "@media (max-width:800px)": {
        width: "100%",
        margin: "0",
        marginTop: "1em",
      },
    },
    themeLabel: {
      fontSize: "2em",
    },
    keysContainer: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
  })
);
const SettingsForm = () => {
  const textAreaRef = useRef();
  const classes = useStyles();
  console.dir(textAreaRef);
  return (
    <>
      <SettingsOptions />
      <div className={classes.container}>
        <div className={classes.header}>Settings</div>
        <div className={classes.subHeader}>Update your Settings</div>
        <form className={classes.formContainer}>
          <div className={classes.inputForm}>
            <span className={classes.inputLabel}>Company Name</span>
            <InputBase
              className={classes.input}
              inputProps={{ style: { height: "0.1em" } }}
              classes={{ focused: classes.inputFocused }}
            />
          </div>
          <div className={classes.inputForm}>
            <span className={classes.inputLabel}>Company Logo</span>
            <div className={classes.inputFile}>
              {" "}
              <input type="file" />
            </div>
          </div>
          <div className={classes.inputForm}>
            <span className={classes.inputLabel}>Company Phone</span>
            <InputBase
              className={classes.input}
              inputProps={{ style: { height: "0.1em" } }}
              classes={{ focused: classes.inputFocused }}
            />
          </div>
          <div className={classes.inputForm}>
            <span className={classes.inputLabel}>Currency Code</span>
            <InputBase
              className={classes.input}
              inputProps={{ style: { height: "0.1em" } }}
              classes={{ focused: classes.inputFocused }}
            />
          </div>
          <div className={classes.discountTaxContainer}>
            <div className={classes.discount}>
              <span className={classes.inputLabel}>Default Discount</span>
              <InputBase
                className={classes.input}
                inputProps={{ style: { height: "0.1em" } }}
                classes={{ focused: classes.inputFocused }}
              />
            </div>

            <div className={classes.tax}>
              <span className={classes.inputLabel}>Default Tax</span>
              <InputBase
                className={classes.input}
                inputProps={{ style: { height: "0.1em" } }}
                classes={{ focused: classes.inputFocused }}
              />
            </div>
          </div>
          <div className={classes.list}>
            <span className={classes.inputLabel}>
              Number of Decimal (Rounding)
            </span>
            <div className={classes.listInput}>
              <SearchDropDownList
                options={[0.1, 0.01, 0.001]}
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className={classes.checkBoxInput}>
            <Checkbox color="primary" />
            <span className={classes.inputLabel}>Display Virtual Keyboard</span>
          </div>
          <div className={classes.list}>
            <div className={classes.listInput}>
              <SearchDropDownList
                options={["palestine timezone"]}
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className={classes.inputForm}>
            <span className={classes.textAreaLabel}>
              Text in the Receipt Header
            </span>
            <TextareaAutosize
              ref={textAreaRef}
              contextMenu=""
              className={classes.input}
              style={{ height: "10em" }}
            />
          </div>
          <div className={classes.inputForm}>
            <span className={classes.textAreaLabel}>
              Text in the Receipt Footer
            </span>
            <TextareaAutosize
              ref={textAreaRef}
              contextMenu=""
              className={classes.input}
              style={{ height: "10em" }}
            />
          </div>
          <div className={classes.checkBoxInput}>
            <Checkbox color="primary" />
            <span className={classes.inputLabel}>Stripe</span>
          </div>
          <div className={classes.keysContainer}>
            <div className={classes.inputForm}>
              <span className={classes.inputLabel}>Stripe Secret Key</span>
              <InputBase
                className={classes.input}
                inputProps={{ style: { height: "0.1em" } }}
                classes={{ focused: classes.inputFocused }}
              />
            </div>
            <div className={classes.inputForm}>
              <span className={classes.inputLabel}>Strip Publishable Key</span>
              <InputBase
                className={classes.input}
                inputProps={{ style: { height: "0.1em" } }}
                classes={{ focused: classes.inputFocused }}
              />
            </div>
          </div>
          <div className={classes.themeInputs}>
            <span className={classes.themeLabel}>Pick Your Theme</span>
            <div className={classes.themesContainer}>
              <div className={[classes.themeImage, classes.input].join(" ")}>
                <span className={classes.themeText}>Light Theme</span>
              </div>
              <div className={[classes.themeImage, classes.input].join(" ")}>
                <span className={classes.themeText}>Dark Theme</span>
              </div>
            </div>
          </div>
          <div className={classes.inputForm}>
            {" "}
            <SubmitButton
              backgroundColor="#34495e"
              onClick={() => {}}
              marginLeft="0"
            >
              Submit
            </SubmitButton>
          </div>
        </form>
      </div>
    </>
  );
};
export default SettingsForm;
