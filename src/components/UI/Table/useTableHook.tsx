import React, { useState, useEffect } from "react";
const useTableHook = (props) => {
  const [disableNextButton, setDisableNextButton] = useState<boolean>(true);
  const [disablePreviousButton, setDisablePreviousButton] = useState<boolean>(
    true
  );
  const [pageSize, setPageSize] = useState<number>(4);
  const [startIndexTablePage, setStartIndexTablePage] = useState<number>(0);
  const [endIndexTablePage, setEndIndexTablePage] = useState<number>(pageSize);
  useEffect(() => {
    if (props.rows.length > pageSize) {
      setDisableNextButton(false);
    } else {
      setDisableNextButton(true);
    }
  }, [pageSize]);
  useEffect(() => {
    startIndexTablePage === 0
      ? setDisablePreviousButton(true)
      : setDisablePreviousButton(false);
  }, [startIndexTablePage]);
  useEffect(() => {
    endIndexTablePage >= props.rows.length
      ? setDisableNextButton(true)
      : setDisableNextButton(false);
  }, [startIndexTablePage]);
  const changeOptionHandler = (event) => {
    setPageSize(event.target.value);
    setEndIndexTablePage(event.target.value);
  };
  const showNextPage = () => {
    setStartIndexTablePage((startIndex) => startIndex + pageSize);
    setEndIndexTablePage((endIndex) => endIndex + pageSize);
  };
  const showPreviousPage = () => {
    setStartIndexTablePage((startIndex) => startIndex - pageSize);
    setEndIndexTablePage((endIndex) => endIndex - pageSize);
  };
  return {
    pageSize,
    changeOptionHandler,
    startIndexTablePage,
    disablePreviousButton,
    showPreviousPage,
    endIndexTablePage,
    disableNextButton,
    showNextPage,
  };
};
export default useTableHook;
