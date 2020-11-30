import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { updateUserProfile, getUserDetails } from "../actions/userActions";
import { RootStore } from "../store";
import Message from "../components/Message";
import { CLEAR_ERRORS } from "../types/userTypes";
import { USER_UPDATEPROFILE_RESET } from "../types/userTypes";

const ProfileScreen: React.FC<RouteComponentProps> = ({ history }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const userDetails = useSelector((state: RootStore) => state.userDetails);
  const { user, error } = userDetails;

  const userLogin = useSelector((state: RootStore) => state.userLogin);
  // Add loading spinner
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector(
    (state: RootStore) => state.userUpdateProfile
  );
  const { success } = userUpdateProfile;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user || !user.name || success) {
        dispatch({ type: USER_UPDATEPROFILE_RESET });
        dispatch(getUserDetails("profile"));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, history, userInfo, user, success]);

  const closeError = () => {
    dispatch({ type: CLEAR_ERRORS });
  };

  const closeMessage = () => {
    setMessage("");
  };

  const closeSuccess = () => {
    setSuccessMessage("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(updateUserProfile({ _id: user!._id, name, email, password }));
      setSuccessMessage("Profile Update");
    }
  };

  return (
    <section className="hero">
      <div className="hero-body">
        <div className="columns is-centered">
          <div className="column is-half">
            <form className="notification is-light" onSubmit={handleSubmit}>
              {error && (
                <Message variant="is-danger" onClose={closeError}>
                  {error}
                </Message>
              )}
              {message && (
                <Message variant="is-danger" onClose={closeMessage}>
                  {message}
                </Message>
              )}
              {success && (
                <Message variant="is-success" onClose={closeSuccess}>
                  {successMessage}
                </Message>
              )}
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Confirm Password</label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="control">
                <button type="submit" className="button is-link">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileScreen;
