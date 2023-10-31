import { Col, Container, Row } from "reactstrap";
import RoomCreate from "./RoomCreate";
import RoomFeed from "./RoomFeed";
import { API_ROOM_VIEW_ALL } from "../../constants/endpoints";

// imrse
import React, { useState, useEffect } from "react";

function MainIndex(props) {
  const [roomFeedItems, setRoomFeedItems] = useState([]);
  const [userId, setUserId] = useState("")
  async function fetchRoomFeed() {
    try {
      // Headers
      const myHeaders = new Headers();
      myHeaders.append("Authorization", props.token);
      // Request Options
      let requestOptions = {
        method: "GET",
        headers: myHeaders,
      };
      // debugger
      // Send Request
      const response = await fetch(API_ROOM_VIEW_ALL, requestOptions);
      //  Get A Response
      const data = await response.json();
      console.log(data);
      // Set State
      setRoomFeedItems(data.room.reverse());
      setUserId(data.userId);
    } catch (error) {
      console.error(error);
    }
  }

  // uef
  //  putting [props.token] will make it so that it only runs when the token changes
  useEffect(() => {
    if (!props.token) return;
    fetchRoomFeed();
  }, [props.token]);

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col md="4">
            <RoomCreate token={props.token} fetchRoomFeed={fetchRoomFeed} />
          </Col>
          <Col md="8">
            <RoomFeed
              roomFeedItems={roomFeedItems}
              token={props.token}
              fetchRoomFeed={fetchRoomFeed}
              userId={userId}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MainIndex;
