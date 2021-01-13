import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import {
  styled,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
const SearchBar = styled(OutlinedInput)({
  width: "95%",
  height: "5%",
  marginTop: "1em",
  marginLeft: "1em",
  backgroundColor: "white",
  margin: "auto",
  borderRadius: "0.3em",
});
const ProductsSearchBar = () => {
  return (
    <SearchBar
      id="input-with-icon-adornment"
      placeholder="Search..."
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      }
      endAdornment={
        <InputAdornment position="end">
          <IconButton>
            <CloseIcon />
          </IconButton>
        </InputAdornment>
      }
    />
  );
};
export default ProductsSearchBar;
