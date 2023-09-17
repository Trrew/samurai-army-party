import React from 'react';
import styles from './Loading.module.css'
const Loading = ({className}) => {
    return (
        <div className={`${styles.loader} ${className}`}></div>
    );
};

export default Loading;