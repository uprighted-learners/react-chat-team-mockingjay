import Login from "./Login";
import Register from "./CreateUser";
import "./Auth.css";
function Auth(props) {
  return (
<<<<<<< HEAD
    <>
      <h1>Hello from District One</h1>

      <Login />
      <Register />
=======
    <><h1>Hello from Auth</h1>
    
    <Login  updateToken={props.updateToken}   />
    <Register   />
    
    
    
>>>>>>> 83beea809de937cb8fae8fa539618a313f08975c
    </>
  );
}

export default Auth;
