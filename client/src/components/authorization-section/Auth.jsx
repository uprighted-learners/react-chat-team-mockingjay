import Login from "./Login";
import Register from "./CreateUser";
import "./Auth.css";
function Auth(props) {
  return (
    <>
      <h1>Hello from District One</h1>
      <Login updateToken={props.updateToken} />
      <Register />
    </>
  );
}

export default Auth;
