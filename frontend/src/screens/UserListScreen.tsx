import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listUsers } from "../actions/userActions";
import { RouteComponentProps, Link } from "react-router-dom";
import { RootStore } from "../store";
import { AuthenticationPayload } from "../types/userTypes";

const UserList: React.FC<RouteComponentProps> = ({ history }) => {
  const dispatch = useDispatch();

  const userList = useSelector((state: RootStore) => state.userList);
  const { loading, usersList } = userList;

  const userLogin = useSelector((state: RootStore) => state.userLogin);
  const { userInfo } = userLogin;

  const deleteHandler = (id: string) => {
    console.log(id);
  };

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo]);

  return (
    <div className="container">
      <h1>Users</h1>
      {loading && (
        <progress className="progress is-small is-primary" max="100">
          15%
        </progress>
      )}
      <table className="table is-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ADMIN</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {usersList &&
            usersList.map((user: AuthenticationPayload) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.isAdmin ? (
                    <i className="fas fa-check" style={{ color: "green" }} />
                  ) : (
                    <i className="fas fa-times" style={{ color: "red" }} />
                  )}
                </td>
                <td>
                  <Link to={`/user/${user._id}/edit`}>
                    <button className="button">
                      <i className="fas fa-edit" />
                    </button>
                  </Link>
                  <button
                    className="button is-danger"
                    onClick={() => deleteHandler(user._id)}
                  >
                    <i className="fas fa-trash" />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
