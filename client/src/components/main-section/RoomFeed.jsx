import RoomCard from "./RoomCard";

function RoomFeed(props) {
  return (
    <>
      {props.roomFeedItems.map((room, index) => (
        <RoomCard key={index} room={room} token ={props.token} fetchRoomFeed={props.fetchRoomFeed} userId={props.userId}/>
      ))}
    </>
  );
}

export default RoomFeed;
