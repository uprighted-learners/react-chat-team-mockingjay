import Login from "./Login";
import Register from "./CreateUser";
import { useState } from "react";

function Auth(props) {
  const [showLogin, setShowLogin] = useState(false);
  //   let showLogin = false;

  function handleToggle() {
    if (showLogin === false) {
      setShowLogin(true);
    } else {
      setShowLogin(false);
    }
    console.log(showLogin);
  }

  return (
    <>
      <h1>Hello from District One</h1>
      <Login updateToken={props.updateToken} />
      <Register />
    </>
  );
}

export default Auth;
