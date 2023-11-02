import { Col, Container, Row } from "reactstrap";
import MessageCreate from "./MessageCreate";
import MessageFeed from "./MessageFeed";
import { API_MESSAGE_VIEW_ALL } from "../../constants/endpoints";

// imrse
import React, { useState, useEffect } from "react";

function RoomPage(props) {
  const [messageFeedItems, setMessageFeedItems] = useState([]);
  const [userId, setUserId] = useState("")
  async function fetchMessageFeed() {
    try {
      // Headers
      const myHeaders = new Headers();
      myHeaders.append("Authorization", props.token);

      console.log(props.token)
      // Request Options
      let requestOptions = {
        method: "GET",
        headers: myHeaders,
      };
      // debugger
      // Send Request
      const response = await fetch(API_MESSAGE_VIEW_ALL, requestOptions);
      //  Get A Response
      const data = await response.json();
      console.log(data);
      // Set State
      setMessageFeedItems(data.messages.reverse());
      setUserId(data.userId);
    } catch (error) {
      console.error(error);
    }
  }

  // uef
  //  putting [props.token] will make it so that it only runs when the token changes
  useEffect(() => {
    if (!props.token) return;
    fetchMessageFeed();
  }, [props.token]);

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col md="4">
            <MessageCreate token={props.token} fetchMessageFeed={fetchMessageFeed} />
          </Col>
          <Col md="8">
            <MessageFeed
              messageFeedItems={messageFeedItems}
              token={props.token}
              fetchMessageFeed={fetchMessageFeed}
              userId={userId}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default RoomPage;