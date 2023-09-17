import React, { useContext, useEffect, useState } from 'react';
import {Oswald} from 'next/font/google'
import { getNameOfStream, getTwitchToken, getUserId } from '@/http/twitchApi';
import Loading from '../Loading/Loading';
import Tokens from '@/app/providers';

const oswald = Oswald({ 
    weight: '400',
    subsets: ['latin'] 
})

const TeamsCompetition = ({channel}) => {

    const {title, setTitle} = useContext(Tokens)

    const getStreamTitle = async () => {
        if(channel =="") return ;
        const accessToken = await getTwitchToken(); 
        const userId = await getUserId(accessToken, channel);
        const title = await getNameOfStream(accessToken, userId)
        setTitle(title); 
    }

    useEffect(() => {
        getStreamTitle();
    }, [channel])


    return (
        <h2 className={`text-white text-center mb-[20px] xl:text-4xl sm:text-xl md:text-3xl mx-4 sm:mt-[50px] lg:mt-0 ${oswald.className}`}>{title === "" ? <Loading/> : title}</h2>
    );
};

export default TeamsCompetition;