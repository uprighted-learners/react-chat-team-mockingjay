import { useParams } from "react-router-dom";
import { API_ROOM_VIEW_BY_ID } from "../../constants/endpoints";
import React, { useState, useEffect } from "react";
import RoomCard from "./RoomCard";


function JoinRoomById(props) {
    const params = useParams();
    console.log(params);

    const [roomPost, setRoomPost] = useState({});

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
        // Send Request
        const response = await fetch(
            API_ROOM_VIEW_BY_ID + "/" + params.id,
            requestOptions
        );
        //  Get A Response
        const data = await response.json();
        console.log(data);
        // Set State
        setRoomPost(data.room);
        
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
        <RoomCard room={roomPost} />
        
        </>
    );
}

export default JoinRoomById;
