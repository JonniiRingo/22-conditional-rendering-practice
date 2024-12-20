import React from "react";
import Form from "./Form";
import Login from "./login"

var userIsNotRegistered = false;
var isLoggedIn = false

function App() {
  return (
    <div className="container">
      {userIsNotRegistered && isLoggedIn? <Form /> : <Login />}
      {/* {userIsRegistered && isLoggedIn? <h1>Hello</h1>: <Login />} */}
    </div>
  );
}

export default App;
