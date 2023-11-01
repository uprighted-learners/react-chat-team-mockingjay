import { Form, FormGroup, Input, Label } from "reactstrap";
import OurButton from "../../ui/OurButton";
import React, { useState } from "react";
import { API_MESSAGE_CREATE } from "../../constants/endpoints";

function MessageCreate(props) {
  const [user, setUser] = useState("John");
  const [room, setRoom] = useState("Room1");
  const [message, setMessage] = useState("message goes here");

  async function handleSubmit() {
    console.log("Create Message Clicked");
    // Try Catch
    try {
      // Headers
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", props.token);

      // Body
      let body = {
        user: user,
        room: room,
        body: message
      };

      // Request Options
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(body),
      };
      // Send Request
      const response = await fetch(API_MESSAGE_CREATE, requestOptions);
      //  Get A Response
      const data = await response.json();
      //  Refresh the Pet Feed
      props.fetchMessageFeed();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <div className="d-flex neutral-background rounded p-5 flex-column">
        <h2 className="font-primary text-center">Create a Message</h2>
        <Form>
          {/* Title, Description, ImageURL */}
          {/* Form Group Title */}
          <FormGroup>
            <Label for="user">User</Label>
            <Input
              type="text"
              name="user"
              id="user"
              placeholder="User"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </FormGroup>
          {/* Form Group Title End */}
          {/* Form Group Description */}
          <FormGroup>
            <Label for="room">Room Name</Label>
            <Input
              type="text"
              name="room"
              id="room"
              placeholder="Enter a description"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
            />
          </FormGroup>
          {/* Form Group Description End */}
          {/* Form Group ImageURL */}
          <FormGroup>
            <Label for="message">Message</Label>
            <Input
              type="textarea"
              name="message"
              id="message"
              placeholder="Enter an message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </FormGroup>
          {/* Form Group ImageURL End */}
          <OurButton title="Create Message" onClick={handleSubmit} />
        </Form>
      </div>
    </>
  );
}

export default MessageCreate;
