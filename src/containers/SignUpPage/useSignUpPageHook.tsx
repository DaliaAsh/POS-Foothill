import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
const useSignUpPageHook = () => {
  const [current, setCurrent] = useState(0);
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const words = [
    "POS The Best... ",
    "Simplicity always win ^_^",
    "Smile :))",
    "What are u waiting for?",
    "Create Account Now!!!",
    "Powered By Foothill Solutions",
  ];
  useEffect(() => {
    const focusTimer = setTimeout(() => {
      nameRef.current.focus();
    }, 500);
    return () => {
      clearTimeout(focusTimer);
    };
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      if (current === words.length - 1) {
        setCurrent(0);
      } else {
        setCurrent(current + 1);
      }
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  });
  const isNameValid = (): boolean => {
    return true;
  };
  const isEmailValid = (): boolean => {
    return true;
  };
  const isPasswordValid = (): boolean => {
    return true;
  };
  const signUpUser = () => {
    console.log("signup");
    const formData = new FormData();
    formData.append("name", nameRef.current.value);
    formData.append("email", emailRef.current.value);
    formData.append("password", passwordRef.current.value);
    axios.post("/user", formData).then((result) => {
      console.log(result);
    });
  };
  const showErrorMessage = () => {};
  const createNewAccount = () => {
    if (isNameValid() && isPasswordValid() && isEmailValid()) {
      signUpUser();
    } else {
      showErrorMessage();
    }
  };
  return { current, words, createNewAccount, nameRef, passwordRef, emailRef };
};
export default useSignUpPageHook;
