import { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import SignInAuth from "../../Models/SignInAuth";

interface useLogInHookProps {
  onSignInAdmin: (authData: SignInAuth) => any;
}
const useLogInHook = (props: useLogInHookProps) => {
  const [t, i18n] = useTranslation("common");
  const [direction, setDirection] = useState<"ltr" | "rtl">("ltr");
  const userName = useRef(null);
  const password = useRef(null);
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");
  const history = useHistory();
  const validatePasswordInline = (passwordValue: string) => {
    /*const passwordRegExpressionNum = /([0-9]+)/;
    const passwordRegExpressionLetters = /([A-z]+)/;
    if (passwordValue === "") {
      setPasswordError("Password Field is Required");
    } else if (passwordValue.length < 4) {
      setPasswordError(
        "Password Field must contain at least 4 characters and numbers"
      );
    } else if (!passwordRegExpressionNum.test(passwordValue)) {
      setPasswordError("Password Field must contain numbers");
    } else if (!passwordRegExpressionLetters.test(passwordValue)) {
      setPasswordError("Password Field must contain letters");
    } else {
      setPasswordError("");
    }*/
  };

  const validateName = (userName: string) => {
    if (userName === "") {
      setNameError("Name Field is Required");
    } else {
      setNameError("");
    }
  };
  const validateFormHandler = (event) => {
    event.preventDefault();
    if (nameError !== "" || passwordError !== "") {
      return;
    }

    const signInAuth: SignInAuth = {
      name: userName.current.value,
      password: password.current.value,
    };
    props.onSignInAdmin(signInAuth).then(() => {
      const isAuthorized = localStorage.getItem("isUserAuthorized");
      if (isAuthorized) {
        const isAuth: boolean = JSON.parse(isAuthorized);
        if (isAuth) {
          history.push("/main/pos");
        }
      }
    });

    clearAllTextFields();
  };
  const clearAllTextFields = () => {
    userName.current.value = "";
    password.current.value = "";
  };
  const switchToArabic = () => {
    i18n.changeLanguage("ar");
    setDirection("rtl");
  };
  const switchToEnglish = () => {
    i18n.changeLanguage("en");
    setDirection("ltr");
  };
  useEffect(() => {
    const focusTimer = setTimeout(() => {
      userName.current.focus();
    }, 500);
    return () => {
      clearTimeout(focusTimer);
    };
  }, []);
  const navigateToCreateAccountPage = () => {
    history.push("/sign-up");
  };
  return {
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
  };
};
export default useLogInHook;
