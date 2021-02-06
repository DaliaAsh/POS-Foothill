import React, { useState, useRef, useEffect } from "react";
import Store from "../../../Models/Store";
interface StoresProps {
  stores: Store[];
  onAddStore: (store: Store, stores: Store[]) => void;
  onInitStores: () => void;
}
const useStores = (props: StoresProps) => {
  const [openStoreDialog, setOpenStoreDialog] = useState<boolean>(false);
  const storeNameRef = useRef(null);
  const emailRef = useRef(null);
  const storePhoneRef = useRef(null);
  const countryRef = useRef(null);
  const cityRef = useRef(null);

  useEffect(() => {
    props.onInitStores();
  }, []);
  const handleOpenAddStoreDialog = () => {
    setOpenStoreDialog(true);
  };
  const closeDialogHandler = () => {
    setOpenStoreDialog(false);
  };
  const submitDialogHandler = (event) => {
    event.preventDefault();
    const newStore: Store = {
      storeId: Date.now(),
      storeName: storeNameRef.current.value,
      email: emailRef.current.value,
      storePhone: Number(storePhoneRef.current.value),
      country: countryRef.current.value,
      city: cityRef.current.value,
    };
    props.onAddStore(newStore, props.stores);
    closeDialogHandler();
  };

  return {
    handleOpenAddStoreDialog,
    openStoreDialog,
    closeDialogHandler,
    submitDialogHandler,
    storeNameRef,
    emailRef,
    countryRef,
    cityRef,
    storePhoneRef,
  };
};
export default useStores;
