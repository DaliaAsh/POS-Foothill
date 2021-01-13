import React, { useState, useRef, useEffect } from "react";
const usePosHook = () => {
  const [loading, setLoading] = useState(true);
  const [openAddClientDialog, setOpenAddClientDialog] = useState(false);
  useEffect(() => {
    setLoading(false);
  }, []);

  const handleCloseAddClient = () => {
    setOpenAddClientDialog(false);
  };
  const handleOpenAddClient = () => {
    setOpenAddClientDialog(true);
  };
  const handleSubmitAddClient = () => {};
  return {
    handleCloseAddClient,
    handleOpenAddClient,
    handleSubmitAddClient,
    openAddClientDialog,
    loading,
  };
};
export default usePosHook;
