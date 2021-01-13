import React, { useState, useMemo } from "react";
const useSearchDropDownListHook = () => {
  const [openDropDownList, setOpenDropDownList] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [clientsNames, setClientsNames] = useState<string[]>([
    "dalia",
    "marah",
    "heath",
    "max",
  ]);
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
      clientsNames.filter((clientName: string) => {
        return clientName.toLowerCase().includes(searchQuery.toLowerCase());
      }),
    [clientsNames, searchQuery]
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
