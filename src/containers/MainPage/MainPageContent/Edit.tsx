import React, { useState, useEffect, useRef } from "react";
import Spinner from "../../../components/UI/Spinner/Spinner";
import { Button, InputLabel, TextField, styled } from "@material-ui/core";
import axios from "axios";
const Edit = (props) => {
  const [loading, setLoading] = useState(true);
  const categoryNameRef = useRef(null);
  useEffect(() => {
    setLoading(false);
  }, []);
  const BackButton = styled(Button)({
    backgroundColor: "#555",
    color: "white",
    position: "absolute",
    right: "25%",
    top: "5em",
    textTransform: "unset",
  });
  const SubmitButton = styled(Button)({
    backgroundColor: "#555",
    color: "white",
    position: "absolute",
    left: "35%",
    top: "15em",
    textTransform: "unset",
  });
  const CustomLabel = styled(InputLabel)({
    position: "absolute",
    left: "35%",
    top: "5em",
    color: "#555",
  });
  const CustomTextField = styled(TextField)({
    position: "absolute",
    left: "35%",
    top: "8em",
    width: "40%",
  });
  const Container = styled("div")({
    width: "100%",
    height: "100%",
    position: "relative",
  });
  const goBack = () => {
    props.history.goBack();
  };
  const submitEditCategoryHandler = () => {
    const categoryId: number = props.location.state.categoryId;
    const updatedCategoryName: string = categoryNameRef.current.value;
    console.log(categoryId);
    console.log(categoryNameRef.current.value);
    setLoading(true);
    axios
      .put(`/category/${categoryId}`, [
        { propName: "name", value: updatedCategoryName },
      ])
      .then(() => {
        console.log("updated");
        setLoading(false);
        categoryNameRef.current.value = updatedCategoryName;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Container>
        <CustomLabel>Category Name</CustomLabel>
        <BackButton onClick={goBack}>Back</BackButton>
        <CustomTextField
          variant="outlined"
          inputRef={categoryNameRef}
          defaultValue={props.location.state.categoryName}
        />
        <SubmitButton onClick={submitEditCategoryHandler}>Submit</SubmitButton>
      </Container>
    );
  }
};
export default Edit;
