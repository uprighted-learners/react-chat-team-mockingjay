import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
  } from "reactstrap";
  
  import { API_ROOM_DELETE_BY_ID } from "../../constants/endpoints";
  
  function RoomCard(props) {
    const { name, description, addedUsers, _id } = props.room;
    
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
          API_ROOM_DELETE_BY_ID + "/" + _id,
          requestOptions
        );
        //  Get A Response
        const data = await response.json();
        console.log(data);
        // Refresh the feed
        props.fetchRoomFeed();
      } catch (error) {
        console.error(error);
      }
    }
    
    return (
      <>
        <Card
          className="mb-3"
          style={{
            width: "100%",
          }}
        >
          <CardBody>
            <CardTitle tag="h5">{name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              subtitle 
            </CardSubtitle>
            <CardText>{description}</CardText>
            
            <Button>Join Room</Button>
            {props.userId === props.room?.ownerId?._id && (
              <Button color="danger" onClick={handleDelete}>
                Delete
              </Button>
            )}
          </CardBody>
        </Card>
      </>
    );
  }

export default RoomCard;
