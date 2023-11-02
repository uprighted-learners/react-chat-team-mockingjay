import MessageCard from "./MessageCard";

function MessageFeed(props) {
    console.log(props)
  return (
    <>
      {props.messageFeedItems.map((message, index) => (
        
        <MessageCard
          key={index}
          message={message}
          token={props.token}
          fetchMessageFeed={props.fetchMessageFeed}
          userId={props.userId}
        />
      ))}
    </>
  );
}

export default MessageFeed;