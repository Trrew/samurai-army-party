import React from 'react';

const MyInput = ({className}, props) => {
    return (
        <input className={`${className}`} {...props}/>
    );
};

export default MyInput;