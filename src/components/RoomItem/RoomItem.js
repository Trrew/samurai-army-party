import React, {useState} from 'react';
import RedirectButton from '@/components/RedirectButton/RedirectButton';
import {Oswald} from 'next/font/google'

const oswald = Oswald({ 
    // weight: '400',
    subsets: ['latin'] 
})

const RoomItem = ({room}) => {

    return (
        <div className={`flex items-center justify-center text-white border-4 mb-4 mr-4 p-4 tracking-wider  max-w-[500px] sm:text-xl ${oswald.className}`}>
            <div className="flex justify-center flex-col mr-4 space-y-2">
                <span>{room.roomName} </span>
                <span>{room.streamName} </span>
                <span>{room.official ? "Official Room" : "Unofficial Room"} </span>
                <span>{room.streamDate} </span>
            </div>
            <RedirectButton type={"connect"} state={room.roomName} className={"min-w-[205px]"}>Connect your Wallet to Enter</RedirectButton>
        </div>
    );
};

export default RoomItem;