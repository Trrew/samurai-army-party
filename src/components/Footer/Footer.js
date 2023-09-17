import React from 'react';
import {Oswald} from 'next/font/google'

const oswald = Oswald({ 
    weight: '400',
    subsets: ['latin'] 
})

const Footer = () => {
    return (
        <div className={`w-full text-white flex items-center justify-center h-12 md:h-16 md:text-2xl fixed bottom-0 ${oswald.className}`}>
            <a target="_blank" href="https://g2esports.com/pages/terms-of-use">TERMS OF USE</a> &nbsp; and &nbsp; <a target="_blank" href="https://g2esports.com/pages/privacy-policy">PRIVACY POLICY</a>
        </div>
    );
};

export default Footer;