import Login from "./Login";
import Register from "./CreateUser";
import React, { useState } from 'react';


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
    <><h1>Hello from Auth</h1>

{showLogin ? <Login  updateToken={props.updateToken} /> 
: <Register updateToken={props.updateToken} />}
<button onClick={handleToggle}>Toggle Login/Register</button>

    
    {/* <Login  updateToken={props.updateToken}   />
    <Register  updateToken={props.updateToken} />
     */}
    
    
    </>
    
  );
}


export default Auth;