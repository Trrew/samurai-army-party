import React, {useState} from 'react';
import MyInput from '../UI/Input/MyInput';
import MyButton from '../UI/Button/MyButton';

const CreateRoomForm = () => {
    const [room, setRoom] = useState({room_name: "", stream_name: "", stream_url: "", start_date: ""})

    const addRoom = (room) => {
        const newRoom = {...room};
        console.log(newRoom)
    }
    return (
        <div className="absolute ">
            <MyInput
                value={room.room_name}
                onChange={e => addRoom({...room, room_name: e.target.value})}
                type='text'
                placeholder='Room Name'
            /><br/><br/><br/>
            <MyInput
                value={room.stream_name}
                onChange={e => addRoom({...room, stream_name: e.target.value})}
                type='text'
                placeholder='Stream Name'
            /><br/><br/><br/>
            <MyInput
                value={room.stream_url}
                onChange={e => addRoom({...room, stream_url: e.target.value})}
                type='text'
                placeholder='Stream URL (ONLY Twitch and Youtube)'
            /><br/><br/><br/>
            <MyButton>Add Room</MyButton>
        </div>
    );
};

export default CreateRoomForm;