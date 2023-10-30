import Login from "./Login";
import Register from "./CreateUser";

function Auth(props) {
  return (
    <><h1>Hello from Auth</h1>
    
    <Login  updateToken={props.updateToken}   />
    <Register   />
    
    
    
    </>
    
  );
}


export default Auth;