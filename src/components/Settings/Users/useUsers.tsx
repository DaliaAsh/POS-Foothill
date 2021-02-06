import React, { useState, useRef, useEffect } from "react";
import User from "../../../Models/User";
interface UsersProps {
  users: User[];
  onAddUser: (user: User, users: User[]) => void;
  onInitUsers: () => void;
}
const useUsers = (props: UsersProps) => {
  const [openUserDialog, setOpenUserDialog] = useState<boolean>(false);
  const [role, setRole] = useState<string>();
  const userNameRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const passwordRef = useRef(null);
  const repeatPasswordRef = useRef(null);
  const [imageFile, setImageFile] = useState(null);
  const emailRef = useRef(null);
  useEffect(() => {
    props.onInitUsers();
  }, []);
  const handleOpenAddUserDialog = () => {
    setOpenUserDialog(true);
  };
  const closeDialogHandler = () => {
    setOpenUserDialog(false);
  };
  const submitDialogHandler = (event) => {
    event.preventDefault();
    const newUser: User = {
      userId: Date.now(),
      userName: userNameRef.current.value,
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      userImagePath: imageFile,
      role: role,
    };
    props.onAddUser(newUser, props.users);
    closeDialogHandler();
  };
  const uploadImageHandler = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
    console.log(file);
  };
  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };
  return {
    handleOpenAddUserDialog,
    openUserDialog,
    closeDialogHandler,
    submitDialogHandler,
    userNameRef,
    firstNameRef,
    lastNameRef,
    emailRef,
    passwordRef,
    repeatPasswordRef,
    uploadImageHandler,
    role,
    handleRoleChange,
  };
};
export default useUsers;
