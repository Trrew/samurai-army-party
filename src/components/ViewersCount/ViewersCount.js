import React from 'react';
import {Oswald} from 'next/font/google'


const oswald = Oswald({ 
    weight: '400',
    subsets: ['latin'] 
})

const ViewersCount = ({count}) => {
    return (
        <div className={`text-white xl:text-3xl sm:text-xl md:text-2xl mb-4 ${oswald.className}`}>
            Viewers: {count} 
        </div>
    );
};

export default ViewersCount;