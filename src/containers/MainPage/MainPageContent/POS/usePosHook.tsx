import React, { useState, useRef, useEffect } from "react";
import User from "../../../../Models/User";
interface PosProps {
  users: User[];
  onInitUsers: () => void;
  loadingUsers: boolean;
  onAddUser: (user: User, users: User[]) => void;
}
const usePosHook = (props: PosProps) => {
  const [openAddClientDialog, setOpenAddClientDialog] = useState(false);
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

  const handleCloseAddClient = () => {
    setOpenAddClientDialog(false);
  };
  const handleOpenAddClient = () => {
    setOpenAddClientDialog(true);
  };
  const handleSubmitAddClient = (event) => {
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
    handleCloseAddClient();
  };
  const uploadImageHandler = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
    console.log(file);
  };
  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };
  let options: string[] = props.users.map((user: User) => {
    return user.userName;
  });
  return {
    handleCloseAddClient,
    handleOpenAddClient,
    handleSubmitAddClient,
    openAddClientDialog,
    options,
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
export default usePosHook;
