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
    const { name, description, addedUsers } = props.room;
    
  
    
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
            {props.userId === props.pet?.ownerId?._id && (
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
