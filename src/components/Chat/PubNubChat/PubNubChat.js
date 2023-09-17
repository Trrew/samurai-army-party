import React, { useEffect } from 'react';
import { Chat, MessageList, MessageInput, usePresence, useUsers, useChannelMembers, useChannels } from "@pubnub/react-chat-components";

const PubNubChat = ({name, setCount, channel = "Default"}) => {
    const theme = "dark"; 
    
    const [channels, refetchPresence, totalPresence, error] = usePresence({
        channels: [channel, ],
      });
      const [users, fetchPage, total, error1] = useUsers();

    //   const [members, fetchPage2, refetchChannelMembers, total2, error2] = useChannelMembers({
    //     channel: "channel",
    //   });
    const [channels2, fetchPage2, total2, error2] = useChannels();
    
    if(name === "auth"){ 
        useEffect(() => {
            console.log(channels2);
            setCount(totalPresence)
        })
        return ;
    }

    return (
            <Chat currentChannel={channel} theme={theme}> 
                <div className="sm:h-[23vh] xl:h-[90%] ">
                    <MessageList />  
                </div>
                <div className="bottom-0 absolute w-full">
                    <MessageInput senderInfo={true} maxLength={140} />
                </div>
            </Chat>
    );
};

export default PubNubChat;