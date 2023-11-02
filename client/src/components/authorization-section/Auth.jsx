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
<<<<<<< HEAD
    <>
      <h1>Hello from District One</h1>
      <Login updateToken={props.updateToken} />
      <Register />
=======

    <><h1>Hello from Auth</h1>

{showLogin ? <Login  updateToken={props.updateToken} /> 
: <Register updateToken={props.updateToken} />}
<button onClick={handleToggle}>Toggle Login/Register</button>

    
    {/* <Login  updateToken={props.updateToken}   />
    <Register  updateToken={props.updateToken} />
     */}
    

>>>>>>> 56917139b5399dcdba6de199f72a9733a56dd948
    </>
  );
}

export default Auth;