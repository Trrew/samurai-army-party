import React, { useEffect } from 'react';
import PubNubChat from '../PubNubChat/PubNubChat';
import { PubNubProvider } from "pubnub-react";
import {Roboto_Condensed} from 'next/font/google'
import PubNub from "pubnub";

// to add any styles go to global css file "global.css" and change .pn-msg
// import './MyChat.css'

const roboto = Roboto_Condensed({
  weight: '400',
  subsets: ['latin'] 
})

const PubNubWrapper = ({name, className, setCount, channel}) => {
    const pubnub = new PubNub({
        publishKey: 'pub-c-00331706-9b15-4120-979e-4106a4a3fe1d',
        subscribeKey: 'sub-c-d6c4169c-0805-4c7a-a753-4faf01e744d4',
        userId: name,
    })

    useEffect(() => {
      const cleanup = () => {
        pubnub.unsubscribe({channels: ["Default"]});
      }
    
      window.addEventListener('beforeunload', cleanup);
    
      return () => {
        cleanup();
        window.removeEventListener('beforeunload', cleanup);
      }
    });
    
    return (
        <div className={` ${className || ''} ${roboto.className}`}>
          <PubNubProvider client={pubnub}>
                <PubNubChat channel={channel} setCount={setCount} name={name}/>
          </PubNubProvider>
        </div>
    );
};

export default PubNubWrapper;