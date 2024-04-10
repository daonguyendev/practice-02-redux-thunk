import { LOGIN_SUCCESS } from "../../constant/loginConstant";
// import { getUsers } from "./userAction";

export const fakeLogin = (payload) => {
  return async (dispatch) => {
    const { username, password } = payload;
    if (username === "admin" && password === "123") {
      dispatch({
        type: LOGIN_SUCCESS,
        payload,
      });
      // dispatch(getUsers());//in a func you can dispatch many times
    } else {
      alert("Login Failed!");
    }
  };
};
