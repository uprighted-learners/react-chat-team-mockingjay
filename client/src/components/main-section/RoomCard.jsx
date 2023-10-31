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
    console.log(props)
    const { name, description, addedUsers, _id } = props.room;

   
    function handleShare() {
      //  Copy to the clipboard
      window.location.href = "http://localhost:3000/feed/" + _id;
    }

   async function handleDelete() {
      try {
        // Headers
        const myHeaders = new Headers();
        myHeaders.append("Authorization", props.token);

        //Request options
        let requestOptions ={
          method: "DELETE",
          headers: myHeaders,
        }

        //Send Request
        const response = await fetch (API_ROOM_DELETE_BY_ID+ "/" + _id,  requestOptions)

        // Get a response
        const data = await response.json();
        console.log(data)

        // Refresh the feed
        props.fetchPetFeed();

      } catch (error) {
        console.error(error)
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
              {addedUsers}
            </CardSubtitle>
            <CardText>{description}</CardText>
            
            <Button onClick={handleShare} >Join Room</Button>
            {props.userId === props.room?.ownerId?._id && (
              <Button color="danger">
                Delete
              </Button>
            )}
          </CardBody>
        </Card>
      </>
    );
  }

export default RoomCard;
