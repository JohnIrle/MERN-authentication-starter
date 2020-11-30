import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import UserListScreen from "./screens/UserListScreen";

function App() {
  return (
    <Router>
      <Header />
      <main style={{ paddingTop: 15 }}>
        <div className="container">
          <Route path="/register" component={RegisterScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/admin/userList" component={UserListScreen} />
        </div>
      </main>
    </Router>
  );
}

export default App;
