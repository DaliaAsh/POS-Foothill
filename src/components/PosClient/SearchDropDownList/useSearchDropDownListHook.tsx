import React, { useState, useMemo, useEffect } from "react";
const useSearchDropDownListHook = (props) => {
  const [openDropDownList, setOpenDropDownList] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedClient, setSelectedClient] = useState<string>("");
  const toggleOpenDropDownList = () => {
    setOpenDropDownList((prevState) => !prevState);
  };
  const searchHandler = (searchQueryValue: string) => {
    setSearchQuery(searchQueryValue);
  };
  const selectClientName = (clientName: string) => {
    setSelectedClient(clientName);
    setOpenDropDownList(false);
  };
  const filteredClients = useMemo(
    () =>
      props.options.filter((clientName: string | number) => {
        if (typeof clientName === "string") {
          return clientName.toLowerCase().includes(searchQuery.toLowerCase());
        } else {
          return clientName.toString().includes(searchQuery);
        }
      }),
    [props.options, searchQuery]
  );
  return {
    openDropDownList,
    toggleOpenDropDownList,
    searchQuery,
    searchHandler,
    filteredClients,
    selectedClient,
    selectClientName,
  };
};
export default useSearchDropDownListHook;
