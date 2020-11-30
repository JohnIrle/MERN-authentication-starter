import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";
import { RouteComponentProps } from "react-router-dom";
import { RootStore } from "../store";
import Message from "../components/Message";

const RegisterScreen: React.FC<RouteComponentProps> = ({ history }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const userLogin = useSelector((state: RootStore) => state.userLogin);
  // Add loading spinner
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(name, email, password));
    }
  };

  const closeMessage = () => {
    setMessage("");
  };

  return (
    <section className="hero">
      <div className="hero-body">
        <div className="columns is-centered">
          <div className="column is-half">
            <form className="notification is-light" onSubmit={handleSubmit}>
              {message && (
                <Message variant="is-danger" onClose={closeMessage}>
                  {message}
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

export default RegisterScreen;
