import React from "react";
import {
  Card,
  styled,
  OutlinedInput,
  Button,
  FormControl,
  Grid,
} from "@material-ui/core";
import CopyrightIcon from "@material-ui/icons/Copyright";
import WarningHelperText from "../UI/WarningHelperText/WarningHelperText";
import useLogInHook from "./useLogInHook";
import Black from "../../assets/Logo/splat.png";
import { connect } from "react-redux";
import SignInAuth from "../../Models/SignInAuth";
import * as authActions from "../../store/actions/auth";

interface logInProps {
  onSignInAdmin: (authData: SignInAuth) => any;
}
const MainHeader = styled(Grid)({
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
const TextMainSpan = styled("span")({
  fontWeight: "bold",
  fontSize: "1.8em",
  color: "white",
});
const TextSecondarySpan = styled("span")({
  fontSize: "1.6em",
  color: "#ffffff",
  fontWeight: "normal",
});
const InputField = styled(OutlinedInput)({
  marginBottom: "1em",
  backgroundColor: "white",
});
const LogInButton = styled(Button)({
  height: "4em",
  backgroundColor: "rgb(9, 113, 241)",
  color: "white",
  marginBottom: "1em",
  "&:hover": {
    backgroundColor: "rgb(9, 113, 241)",
    color: "white",
  },
});
const FormContainer = styled("form")({
  width: "80%",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
});
const CopyrightContainer = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
});
const LanguageSpan = styled("span")({
  margin: "1em",
  textDecoration: "underline",
  fontWeight: "bold",
  color: "rgb(9, 113, 241)",
  "&:hover": {
    cursor: "pointer",
    color: "white",
  },
});
const CreateAccountSpan = styled("span")({
  color: "#ffffff",
  fontWeight: "bold",
  opacity: "0.5",
  "&:hover": {
    cursor: "pointer",
    opacity: "1",
  },
});
const LogIn = (props: logInProps) => {
  const {
    validateFormHandler,
    userName,
    password,
    validateName,
    validatePasswordInline,
    nameError,
    passwordError,
    switchToArabic,
    switchToEnglish,
    t,
    direction,
    navigateToCreateAccountPage,
  } = useLogInHook(props);
  const LogInCard = styled(Card)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "black",
    justifyContent: "center",
    padding: "1em",
    textAlign: "center",
    direction: direction,
    width: "100%",
    height: "100%",
  });
  return (
    <LogInCard>
      <MainHeader>
        <Grid
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TextMainSpan>{t("login.title")}</TextMainSpan>
          <img width="80" height="80" src={Black} />
        </Grid>

        <br />
        <TextSecondarySpan>{t("login.subtitle")}</TextSecondarySpan>
      </MainHeader>
      <FormContainer
        onSubmit={(event) => {
          validateFormHandler(event);
        }}
      >
        <FormControl>
          <InputField
            placeholder={t("login.name")}
            type="text"
            inputRef={userName}
            required={true}
            onChange={() => validateName(userName.current.value)}
          />
          <WarningHelperText error={nameError} />
        </FormControl>
        <FormControl>
          <InputField
            placeholder={t("login.password")}
            type="password"
            inputRef={password}
            required={true}
            onChange={() => validatePasswordInline(password.current.value)}
          />
          <WarningHelperText error={passwordError} />
        </FormControl>

        <LogInButton type="submit">{t("login.button")}</LogInButton>
        <CopyrightContainer>
          <CopyrightIcon fontSize="small" />
          {t("login.footer")}{" "}
          <LanguageSpan onClick={switchToArabic}>العربية</LanguageSpan>
          <LanguageSpan onClick={switchToEnglish}>English</LanguageSpan>
          <CreateAccountSpan onClick={navigateToCreateAccountPage}>
            {t("login.signUp")}
          </CreateAccountSpan>
        </CopyrightContainer>
      </FormContainer>
    </LogInCard>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSignInAdmin: (authData: SignInAuth) =>
      dispatch(authActions.signInAdmin(authData)),
  };
};
export default connect(null, mapDispatchToProps)(LogIn);
