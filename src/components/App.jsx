import React from "react";
import Form from "./Form";
import Login from "./login"

var userIsRegistered = false;
var isLoggedIn = false

function App() {
  return (
    <div className="container">
      {!userIsRegistered && <Form />}
      {userIsRegistered && isLoggedIn? <h1>Hello</h1>: <Login />}
    </div>
  );
}

export default App;
