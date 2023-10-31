

import React, { useState } from "react";

import { Form, FormGroup, Label, Input } from "reactstrap";
import OurButton from "../../ui/OurButton";
import { API_USER_REGISTER } from "../../constants/endpoints";


function Register (props) {
    const [email, setEmail] = useState("jwick@puppyfinder.com");
    const [password, setPassword] = useState("focusCommitment1979");
    const [firstname, setFirstName] = useState("John");
    const [lastname, setLastName] = useState("Wick");

  async   function handleSubmit() {
// try catch 
try {
    
    // Headers
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")   

    //Body
    const body = 
    {
        firstName: firstname,
        lastName: lastname,
        email: email,
        password: password
    };
    // Request Options
    
const requestOption = {
    method:"POST",
    headers: myHeaders,
    body: JSON.stringify(body)

};
    //Send Request
const response = await fetch(API_USER_REGISTER, requestOption)

    // Get a response
const data = await response.json()
// update the token

props.updateToken(data.token)
console.log(data);

} catch (error) {
    console.error(error)
}


    }

    return ( 
        <>
    <div className="d-flex justify-content-center mt-5">
        <div 
        className="secondary-background p-5 rounded"
        style={{width:"450px",height: "370ppx"}}
>

         <h2 className="text-center font-primary bold">Registration Form</h2>
         <Form>
                        {/* Form group firstname */}
                        <FormGroup>
            <Label for="firstname"> First Name  </Label>
             <Input
                 id="firstname"
                 name="firstname"
                 placeholder="Enter First Name"
                 type="firstname" 
                 value={firstname}
                 onChange={(e) => setFirstName(e.target.value)}
                 />
            </FormGroup>
             {/* Form group firstname ending */}

                         {/* Form group lastname */}
            <FormGroup>
            <Label for="lastname"> Last Name  </Label>
             <Input
                 id="lastname"
                 name="lastname"
                 placeholder="Enter Last Name"
                 type="lastname" 
                 value={lastname}
                 onChange={(e) => setLastName(e.target.value)}
                 />
            </FormGroup>
             {/* Form group lastname ending */}


            {/* Form group Email */}
            <FormGroup>
            <Label for="email"> Email  </Label>
             <Input
                 id="email"
                 name="email"
                 placeholder="Please Enter Email"
                 type="email"    
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 />
            </FormGroup>
        {/* Form Group email ending */ }

            {/* Form group password */}
            <FormGroup>
            <Label for="password"> Password  </Label>
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
             <OurButton
              title="Register"
              onClick={handleSubmit}
            />
         </Form>
</div>

    </div>
        </>
     );
}
 
export default Register;