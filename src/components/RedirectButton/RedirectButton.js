import React from 'react';
import MyButton from '../UI/Button/MyButton';
import { useRouter } from 'next/navigation';

const RedirectButton = ({children, className, type, state=""}) => {
    const router = useRouter();

    const connectToMatrica = async(e) => {
        e.preventDefault();
        const currentUrl = window.location.href.split('?error');
        router.push(`https://matrica.io/oauth2?client_id=bf4ca2c4fb1defc&scope=profile%20nfts&response_type=code&redirect_uri=${currentUrl[0]}&code_challenge=gZZ8J4RSrIrrJVRoGSMgJ17borOtw4vwKBNnwqkBoro&code_challenge_method=S256&state=${state}`)
      }

      const disconnectOfMatrica = (e) => {
        e.preventDefault();
        localStorage.clear();
        router.push("/auth"); 
    }

    return (
        <MyButton className={className} onClick={e =>type == "connect" ?  connectToMatrica(e) : disconnectOfMatrica(e)}>{children}</MyButton>
    );
};

export default RedirectButton;