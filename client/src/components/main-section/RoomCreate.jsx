import { Form, FormGroup, Input, Label } from "reactstrap";
import OurButton from "../../ui/OurButton";
import React, { useState } from 'react';
import { API_ROOM_REGISTER } from "../../constants/endpoints";


function RoomCreate(props) {
const [name, setName] =useState("Continental");
const [description, setDescription] =useState("No business conducted");
const [addedUsers, setAddedUsers] =useState("John Wick", "Winston", "Ms. Perkins");

   async function handleSubmit() {
        console.log("Create Room Clicked");

        //Try catch

        try {
            // Headers
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", props.token);

            // Body
            let body = {
                name: name,
                description: description,
                addedUsers: [""]
            };

            // request options
            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: JSON.stringify(body)

            };

            // send request
            const response = await fetch (API_ROOM_REGISTER, requestOptions);

            // get a response
            const data = await response.json();
            // refresh the room feed
            props.fetchRoomFeed();
    console.log(data);


        } catch (error) {
            console.error(error)
        }
    }
  return (
    <>
    <div className="d-flex neutral-background rounded p-5 flex-column">
        <h2 className="font-primary text-center">Create a Room</h2>
        <Form>
 
            {/* Form Group Title  */}
<FormGroup>
            <Label for="name">Name</Label>
            <Input 
            type="text"
            name="title"
            id="name"
            placeholder="Enter a Room Name"  
            value={name}     
            onChange={(e) => setName(e.target.value)}

            />            
            </FormGroup>

             {/* Description Group start */}

             <FormGroup>
            <Label for="description">Description</Label>
            <Input 
            type="textarea"
            name="descrption"
            id="description"
            placeholder="Enter a Description"     
            value={description}     
            onChange={(e) => setDescription (e.target.value)}
            />
            </FormGroup>
             {/* Description Group End */}

             {/* ImageURL start */}
             <FormGroup>
            <Label for="addedUsers">Added Users</Label>
            <Input 
            type="text"
            name="addedUsers"
            id="addedUsers"
            placeholder="User List"    
            value={addedUsers}     
            onChange={(e) => setAddedUsers(e.target.value)}
            />
            </FormGroup>
             {/* Description image URL End */}

             <OurButton title="Create New room " onClick={handleSubmit}  />

        </Form>

  

    </div>
    
    </>
  );
}


export default RoomCreate;