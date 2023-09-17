import React from 'react';
import RoomItem from '../RoomItem/RoomItem';

const ListOfRooms = ({rooms}) => {

    return (
        <div className=" overflow-auto h-[65vh] w-fit">
            {rooms.map(room => (
                    <RoomItem key={room.roomName} room={room}></RoomItem>
                ))
            }
        </div>
    );
};

export default ListOfRooms;