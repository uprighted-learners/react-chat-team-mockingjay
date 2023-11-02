import RoomCard from "./RoomCard";

function RoomFeed(props) {
  console.log(props.roomFeedItems)
  return (
    <>
      {props.roomFeedItems.map((room, index) => (
        <RoomCard key={index} room={room} token ={props.token} fetchRoomFeed={props.fetchRoomFeed} userId={room._id}/>
      ))}
    </>
  );
}

export default RoomFeed;
