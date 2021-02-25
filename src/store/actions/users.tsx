import * as actionTypes from "./actionTypes";
import axios from "axios";
import User from "../../Models/User";
export const setUsers = (users: User[]) => {
  return { type: actionTypes.FETCH_USERS, users: users };
};
export const fetchUsers = () => {
  return (dispatch) => {
    return axios.get("user").then((result) => {
      console.log(result.data.users);
      dispatch(setUsers(result.data.users));
    });
  };
};
export const addUserHandler = (users: User[]) => {
  return { type: actionTypes.ADD_USER, users: users };
};
export const addUser = (user: User, users: User[]) => {
  const userFormData: FormData = new FormData();
  userFormData.append("userId", JSON.stringify(user.userId));
  userFormData.append("userName", user.userName);
  userFormData.append("firstName", user.firstName);
  userFormData.append("lastName", user.lastName);
  userFormData.append("email", user.email);
  userFormData.append("password", user.password);
  userFormData.append("userImage", user.userImagePath);
  userFormData.append("role", user.role);
  let updatedUsers: User[] = [...users, user];
  return (dispatch) => {
    axios
      .post("user", userFormData)
      .then(() => {
        dispatch(addUserHandler(updatedUsers));
        console.log("add user");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
