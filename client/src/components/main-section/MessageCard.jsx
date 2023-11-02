import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Label,
  Input,
} from "reactstrap";
import {
  API_MESSAGE_DELETE_BY_ID,
  API_MESSAGE_UPDATE_BY_ID,
} from "../../constants/endpoints";
import React, { useState } from "react";

function MessageCard(props) {
  console.log(props)
  const { user, room, message, _id } = props.message;
  const [editModeEnabled, setEditModeEnabled] = useState(false);

  const [userInput, setUserInput] = useState(user);
  const [messageInput, setMessageInput] = useState(message);
  
  function handleShare() {
      // Copy to clipboard
      navigator.clipboard.writeText("http://localhost:3000/feed/" + _id);
    }

  function handleToggleEdit() {
    console.log("Edit Toggle Works");
    setEditModeEnabled(!editModeEnabled);
  }

  async function handleEdit() {
    // Headers
    let myHeaders = new Headers();
    myHeaders.append("Authorization", props.token);
    myHeaders.append("Content-Type", "application/json");
    // Body
    const body = {
      user: userInput,
      room: room,
      body: message
    };
    // Request Options
    const requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: JSON.stringify(body),
    };
    // Send Request
    const response = await fetch(
      API_MESSAGE_UPDATE_BY_ID + "/" + _id,
      requestOptions
    );
    //  Get A Response
    const data = await response.json();
    console.log(data);
    // Refresh the feed
    props.fetchMessageFeed();
    // Change the edit mode to false
    setEditModeEnabled(false);
  }

  async function handleDelete() {
    try {
      // Headers
      const myHeaders = new Headers();
      myHeaders.append("Authorization", props.token);
      // Request Options
      let requestOptions = {
        method: "DELETE",
        headers: myHeaders,
      };
      // Send Request
      const response = await fetch(
        API_MESSAGE_DELETE_BY_ID + "/" + _id,
        requestOptions
      );
      //  Get A Response
      const data = await response.json();
      console.log(data);
      // Refresh the feed
      props.fetchMessageFeed();
    } catch (error) {
      console.error(error);
    }
  }
  console.log(props)
  return (
    <>
      <Card
      className="mb-3"
      style={{
        width: "100%",
      }}
    >
      
      <CardBody>
          
        {editModeEnabled ? (
          <>
            <Label for="title">Title</Label>
            <Input
              id="title"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="mb-2"
            />
          </>
        ) : (
          <CardTitle tag="h5">{user}</CardTitle>
          )}
          
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {props.message.body}
        </CardSubtitle>
        {editModeEnabled ? (
          <>
            <Label for="description">Description</Label>
            <Input
              id="description"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              className="mb-2"
              type="textarea"
            />
          </>
        ) : (
          <CardText>{message}</CardText>
        )}
        <Button onClick={handleShare}>Share Post</Button>
        {props.userId === props.message?.ownerId?._id && (
          <Button color="danger" onClick={handleDelete}>
            Delete
          </Button>
        )}

        {/* Edit Button */}
        {props.userId === props.message?.ownerId?._id && (
          <Button color="warning" onClick={handleToggleEdit}>
            Edit
          </Button>
        )}
        {/* Save Button */}
        {editModeEnabled && (
          <Button color="success" onClick={handleEdit}>
            Save
          </Button>
        )}
      </CardBody>
    </Card>
      
    </>
  );
}

export default MessageCard;
