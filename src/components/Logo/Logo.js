import React from 'react';
import {Oswald} from 'next/font/google'


const oswald = Oswald({ 
    weight: '700',
    subsets: ['latin'] 
})
const Logo = () => {
    return (
        <>
            <h3 className={` text-white md:text-4xl text-3xl pt-[2rem] ml-[1em] ${oswald.className} `}>
                Samurai Army Watch Party
            </h3>
        </>
    );
};

export default Logo;