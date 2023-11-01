import React, { useState } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import OurButton from "../../ui/OurButton";
import { API_USER_LOGIN } from "../../constants/endpoints";
import "./Auth.css";

function Login(props) {
  const [email, setEmail] = useState("jwick@puppyfinder.com");
  const [password, setPassword] = useState("focusCommitment1979");

  async function handleSubmit() {
    try {
      // HEADERS
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      //BODY

      const body = {
        email: email,
        password: password,
      };
      // REQUEST OPTIONS
      // console.log(body)
      const requestOption = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(body),
      };
      console.log(requestOption);
      //SEND REQUEST
      const response = await fetch(API_USER_LOGIN, requestOption);
      // GET A RESPONSE
      const data = await response.json();

<<<<<<< HEAD
      //UPDATE THE TOKEN
      props.updateToken(data.token);
    } catch (error) {
      console.error(error);
=======
        //UPDATE THE TOKEN
        props.updateToken(data.token)



        // naviagte to next page
        // navigate("")
    
} catch (error) {
    console.error(error)
}
>>>>>>> 457ac70ab91d8d30dfe95f4cefa9f5624568f6a6
    }
  }

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <div
          className="secondary-background p-5 rounded"
          style={{ width: "450px", height: "370ppx" }}
        >
          <h2>Login Form</h2>
          <Form>
            {/* Form group Email */}
            <FormGroup>
              <Label for="email"> Email </Label>
              <Input
                id="email"
                name="email"
                placeholder="Please Enter Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            {/* Form Group email ending */}

            {/* Form group password */}
            <FormGroup>
              <Label for="password"> Password </Label>
              <Input
                id="password"
                name="password"
                placeholder="Enter Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            {/* Form group password ending */}
            <OurButton title="Login" onClick={handleSubmit} />
          </Form>
        </div>
      </div>
    </>
  );
}

export default Login;
