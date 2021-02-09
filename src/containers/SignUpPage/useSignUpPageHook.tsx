import React, { useRef, useEffect } from "react";
import useOnScreen from "../../CustomHooks/useOnScreen";
import Auth from "../../Models/Auth";
import { History } from "history";
interface SignUpPageProps {
  onSignUpAdmin: (authData: Auth) => any;
  history: History;
}
const useSignUpPageHook = (props: SignUpPageProps) => {
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const greetingTextRef = useRef(null);
  const isGreetingTextVisible = useOnScreen(greetingTextRef);
  const greetingImageRef = useRef(null);
  const isGreetingImageVisible = useOnScreen(greetingImageRef);
  const changeNameHandler = () => {
    console.log(nameRef.current.value);
  };
  const handleSignUpAdmin = (event) => {
    event.preventDefault();
    const authData: Auth = {
      id: Date.now(),
      username: nameRef.current.value,
      password: passwordRef.current.value,
      email: emailRef.current.value,
    };
    props.onSignUpAdmin(authData).then(() => {
      const isAuth = localStorage.getItem("isUserAuthorized");
      if (isAuth) {
        const isUserAuthorized: boolean = JSON.parse(isAuth);
        if (isUserAuthorized) {
          props.history.push("/main/pos");
        }
      }
    });
  };
  useEffect(() => {
    const focusTimer = setTimeout(() => {
      nameRef.current.focus();
    }, 200);
    return () => {
      clearTimeout(focusTimer);
    };
  }, []);
  return {
    nameRef,
    passwordRef,
    emailRef,
    changeNameHandler,
    greetingTextRef,
    isGreetingTextVisible,
    greetingImageRef,
    isGreetingImageVisible,
    handleSignUpAdmin,
  };
};
export default useSignUpPageHook;
