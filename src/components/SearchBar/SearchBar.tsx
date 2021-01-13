import React, { useState } from "react";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import { styled } from "@material-ui/core";
interface SearchBarProps{
onSearchHandler:(searchQuery:string)=>void ,
alignSelf:string
};
const SearchBarWrapper = styled("div")({
  flexDirection: "row",
  display: "flex",
  alignItems: "center"
});
const SearchInput = styled(OutlinedInput)({
  height: "2em",
  width: "10em",
});
const SearchLabel = styled(InputLabel)({
  marginRight: "0.5em",
});
const SearchBar = (props:SearchBarProps) => {
  const [searchInput, setSearchInput] = useState("");
  const searchInputChangeHandler = (searchQuery:string) => {
    setSearchInput(searchQuery);
    props.onSearchHandler(searchQuery); 
  };
  return (
    <SearchBarWrapper style={{alignSelf:`${props.alignSelf}`}}>
      <SearchLabel>Search:</SearchLabel>
      <SearchInput
        value={searchInput}
        onChange={(event) => searchInputChangeHandler(event.target.value)}
      />
    </SearchBarWrapper>
  );
};
export default SearchBar;
