import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers } from "../redux/reducers/userReducer";
import { getUsers } from "../redux/actions/userAction";

function User() {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    if (users.length === 0) {
      dispatch(getUsers());
    }
  }, [users, dispatch]);

  return (
    <div>
      <table border={1} style={{ textAlign: "left" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default User;
