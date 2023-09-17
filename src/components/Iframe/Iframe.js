import { useEffect, useState } from "react";

const responsiveHeight = (width) => {
    const res = width * 9 / 16;
    return res > 608 ? res : Math.max(300, res);
  };

const Iframe = ({ channel, currentURL }) => {
    const [width, setWidth] = useState(1080);
    const [height, setHeight] = useState((70*720)/100);

    useEffect(() => {
        let windowSize = window.innerWidth;
        setWidth(Math.ceil(windowSize > 1279 ? windowSize * 0.6 : windowSize));
        setHeight(responsiveHeight(width));
    }, [height]);

    return (
        <>
            {currentURL === '' ?
            '':
            <iframe
                src={`https://player.twitch.tv/?channel=${channel}&parent=${currentURL}&autoplay=false`}
                height={height}
                width={width}
                allowFullScreen
                className="border-4 border-rose-600 xl:mx-4"
            />
        }    
        </>    
    );
};

export default Iframe;
  
 