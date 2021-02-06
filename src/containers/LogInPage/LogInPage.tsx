import React, { useEffect, Suspense, useState } from "react";
import LogIn from "../../components/LogIn/LogIn";
import { styled } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Paper from "@material-ui/core/Paper";
import Spinner from "../../components/UI/Spinner/Spinner";
import { BreakPoints } from "../../Constants/BreakPoints/BreakPoints";
import { Grid } from "@material-ui/core";

const LogInPageLayout = styled(Grid)({
  width: "100%",
  height: "100vh",
  backgroundColor: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "all .5s ease-in-out",
});

const LogInPage = (props) => {
  const mobileOrientation = useMediaQuery(`(max-width:${BreakPoints.SM})`);
  const CustomPaper = styled(Paper)({
    width: mobileOrientation ? "100%" : "40%",
    height: mobileOrientation ? "100%" : "30em",
  });
  useEffect(() => {
    let isAuth = false;
    const auth = localStorage.getItem("pos-auth");
    if (auth) {
      const authObject = JSON.parse(auth);
      isAuth = authObject.isAuth;
      props.history.push("/main");
    } else {
      isAuth = false;
      setLoading(false);
    }
  }, []);
  const [loading, setLoading] = useState(true);
  const submitFormHandler = (userName: string, password: string) => {
    const auth = { isAuth: true, userName: userName, password: password };
    localStorage.setItem("pos-auth", JSON.stringify(auth));
    props.history.push("/main");
  };
  return (
    <Suspense fallback="loading">
      {loading ? (
        <Spinner />
      ) : (
        <LogInPageLayout>
          <CustomPaper>
            <LogIn onSubmitForm={submitFormHandler} />
          </CustomPaper>
        </LogInPageLayout>
      )}
    </Suspense>
  );
};
export default LogInPage;
