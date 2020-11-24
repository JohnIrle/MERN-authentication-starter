import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";

function App() {
  return (
    <Router>
      <Header />
      <main style={{ paddingTop: 15 }}>
        <div className="container">
          <Route path="/register" component={RegisterScreen} />
          <Route path="/login" component={LoginScreen} />
        </div>
      </main>
    </Router>
  );
}

export default App;
