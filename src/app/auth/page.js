'use client';
import React, { useContext, useEffect, useState } from 'react';

import RedirectButton from '@/components/RedirectButton/RedirectButton';
import Logo from '@/components/Logo/Logo';
import TeamsCompetition from '@/components/TeamsCompetition/TeamsCompetition';
import { getRefreshToken, getToken } from '@/http/tokenApi';
import { getNfts, getUser } from '@/http/userApi'
import Tokens from '../providers';

import Loading from '@/components/Loading/Loading';
import Footer from '@/components/Footer/Footer';
import PubNubWrapper from '@/components/Chat/PubNubWrapper/PubNubWrapper';
import ViewersCount from '@/components/ViewersCount/ViewersCount';
import ListOfRooms from '@/components/ListOfRooms/ListOfRooms';
import { useRouter } from 'next/navigation';
import CreateRoomForm from '@/components/CreateRoomForm/CreateRoomForm';

const Auth = () => {
  const [nftCollectionName, setNftCollectionName] = useState(''); 
  const [userName, setUserName] = useState('');
  const {setAccessToken, refreshToken, setRefreshToken, channel, title} = useContext(Tokens)
  const [loading, setLoading] = useState(false);
  const [formLoader, setFormLoader] = useState(false);
  const [count, setCount] = useState(0);
  const router = useRouter(); 
  
  const getUserPermission = async () => {
    let data = window.location.href.split('code=');
    if(data.length === 2) {
      data = data[1].split('&state=')
      setLoading(prev => !prev)
      const code = data[0];

      const response = await getToken(code); 
      setAccessToken(response.data.access_token); 
      setRefreshToken(response.data.refresh_token); 

      const user = await getUser(response.data.access_token);
      setUserName(user);

      const nfts = await getNfts(response.data.access_token);
      setNftCollectionName(nfts.collection.name);
    }
  }

  useEffect(() => {
    getUserPermission();
  }, [])

  useEffect(() => {
    if(nftCollectionName == "Samurai Army"){
      let data = window.location.href.split('code=')[1].split('&state=');
      if(data[1] == "form") {
        setFormLoader(prev => !prev)
      } else {
          router.push(`/stream/${data[1]}?name=${userName}`)
      }
    }
  }, [nftCollectionName])

  useEffect(() => {
    let token = refreshToken;
    let data = window.location.href.split('code=');
    if(data.length >= 2) {
      const interval = setInterval(async () => {
          //console.log("token: " +token)
          const response =  await getRefreshToken(token); 

          setAccessToken(response.data.access_token);
          setRefreshToken(response.data.refresh_token); 

          token = response.data.refresh_token;
      }, 3000, token);
      return () => clearInterval(interval);
    }
  }, [refreshToken]);

  const [rooms] = useState([
    {
      roomName: "One",
      streamName: "RERUN: ShaDoWn vs. SKillous - ESL SC2 Masters Summer 2023 Finals - Knockout Bracket Round 1",
      streamURL: "https://www.twitch.tv/esl_sc2",
      streamDate: "Mon, 11 Sep 2023 13:49:36 GMT",
      official: true,
      owner: "G2Dev"
    },
    {
      roomName: "Two",
      streamName: "HIGHLIGHTS: ENCE vs EG - ESL Pro League S18",
      streamURL: "https://www.twitch.tv/eslcs",
      streamDate: "Mon, 11 Sep 2023 13:49:36 GMT",
      official: true,
      owner: "G2Dev"
    },
    {
      roomName: "three",
      streamName: "ESEA Open S46 | G2 OYA vs. Quick Hands | Watch Party with",
      streamURL: "https://www.twitch.tv/g2esports",
      streamDate: "Mon, 11 Sep 2023 13:49:36 GMT",
      official: false,
      owner: "G2Dev123"
    },
  ])
    return (
      <>
          <Logo/>
          <div className="relative top-1/2 -translate-y-1/2">
            {formLoader ? <CreateRoomForm/> : ''}
            <div className="flex justify-center flex-wrap flex-row lg:ml-[150px] sm:ml-4">
  
                  <div className="flex items-center flex-col">
                  <ViewersCount count={count}/>
                  <ListOfRooms rooms={rooms}/>

                  </div>
                  <RedirectButton type={"connect"} state={"form"} className={"ml-4 h-[50px] text-xl"}>Create Room</RedirectButton>
            </div>
            {/* {loading ? 
              <Loading className="relative left-1/3"/>
              :
              <div className="flex justify-center flex-wrap flex-row xl:ml-[310px]">
  
                  <div className="flex items-center flex-col">
                    <TeamsCompetition channel={channel}/>
                    {title === '' || title === "There's no active watch party at the moment. Come back later!"?
                      ''
                      :
                      < >
                        
                        <MyButton onClick={e => connectToMatrica(e)}>Connect your Wallet to Enter</MyButton>
                      </>
                    }
                  </div>
                    <MyButton onClick={e => connectToMatrica(e)}>Create Room</MyButton>
              </div> 
            } */}
          </div>
          <PubNubWrapper name="auth" setCount = {setCount}/>
          <Footer/>
      </>
      
    );
};

export default Auth;
