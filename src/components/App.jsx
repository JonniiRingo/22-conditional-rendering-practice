import React from "react";
import Form from "./Form";
import Login from "./login"

var userIsRegistered = false;
var isLoggedIn = false

function App() {
  return (
    <div className="container">
      {isLoggedIn? (<h1>Hello</h1>): userIsRegistered? (<Login /> ): (<Form />)}
    </div>
  );
}

export default App;
