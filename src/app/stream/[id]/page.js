'use client';
import React, { useContext, useEffect, useState} from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import RedirectButton from '@/components/RedirectButton/RedirectButton';
import Logo from '@/components/Logo/Logo';
import PubNubWrapper from '@/components/Chat/PubNubWrapper/PubNubWrapper';
import { getRefreshToken } from '@/http/tokenApi';
import Tokens from '../../providers';

import styles from './StreamPage.module.css'
import Iframe from '@/components/Iframe/Iframe';
import Footer from '@/components/Footer/Footer';
import TeamsCompetition from '@/components/TeamsCompetition/TeamsCompetition'; 

const StreamPage = () => {
    const router = useRouter(); 
    const searchParams = useSearchParams();
    const [currentURL, setCurrentUrl] = useState('');
    const [roomName, setRoomName] = useState('');
    const [twitchChannel, setTwitchChannel] = useState('');
    const {accessToken, setAccessToken, refreshToken, setRefreshToken} = useContext(Tokens);
    
    const name = searchParams.get('name').slice(0, 12) || localStorage.getItem("Name");

    useEffect(() => {
        setCurrentUrl(window.location.hostname);
        localStorage.setItem("Name", name);
        if(!accessToken && localStorage.getItem("Name") ==="null") { //check if user have permission to be here
            router.push('/auth')
        } 
    }, [])

    // useEffect(() => {
    //     let token = refreshToken;
    //     const interval = setInterval(async () => {
            
    //         const response =  await getRefreshToken(token); 

    //         setAccessToken(response.data.access_token);
    //         setRefreshToken(response.data.refresh_token);

    //         token = response.data.refresh_token;
    //     }, 3000, token);
    //     return () => clearInterval(interval);
    // }, []);

    const [rooms] = useState([
        {
          roomName: "One",
          streamName: "RERUN: ShaDoWn vs. SKillous - ESL SC2 Masters Summer 2023 Finals - Knockout Bracket Round 1",
          streamURL: "https://www.twitch.tv/esl_sc2",
          streamDate: "Mon, 11 Sep 2023 13:49:36 GMT",
          official: true
        },
        {
          roomName: "Two",
          streamName: "HIGHLIGHTS: ENCE vs EG - ESL Pro League S18",
          streamURL: "https://www.twitch.tv/eslcs",
          streamDate: "Mon, 11 Sep 2023 13:49:36 GMT",
          official: true
        },
        {
          roomName: "three",
          streamName: "ESEA Open S46 | G2 OYA vs. Quick Hands | Watch Party with",
          streamURL: "https://www.twitch.tv/g2esports",
          streamDate: "Mon, 11 Sep 2023 13:49:36 GMT",
          official: false
        },
    ])

    const getDataForRoom = () => {
        let room="";
        rooms.filter(e => e.roomName === window.location.pathname.split('/stream/')[1] ? room=e : '');
        setRoomName(room.roomName);
        setTwitchChannel(room.streamURL.split('tv/')[1])
    }
    useEffect(() => {
        getDataForRoom();
    }, [])
    
    return (
        <>
            <RedirectButton
                type={"disconnect"} 
                className="absolute md:top-[1em] right-[2em] sm:top-[3em] z-[1] w-[310px] h-[50px] text-2xl">
                    Disconnect your Wallet
            </RedirectButton>
            <Logo/>
            <div className={styles.content}>
                <div className='flex flex-col items-center	'>
                    <TeamsCompetition channel={twitchChannel}/>
                    <Iframe channel={twitchChannel} currentURL={currentURL}/>
                </div>
                <PubNubWrapper className={`border-4 flex-0 relative w-[450px] sm:min-h-[30vh] max-h-[648px] xl:mb-0 xl:mt-[55px] sm:mt-[30px] sm:mb-9  `} name={name} channel={roomName}></PubNubWrapper>
            </div>
            <Footer/>
        </>
    );
};

export default StreamPage;
