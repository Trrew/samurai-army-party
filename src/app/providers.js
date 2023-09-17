'use client';
import { createContext, useState } from 'react';
import { getStaticProps } from 'next';

const Tokens = createContext();
export default Tokens;
export function Providers({ children }) {
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');
  const [title, setTitle] = useState('');
  const [channel, setChannel] = useState("eslcs");

  return (
    <>
      <Tokens.Provider value={{accessToken, setAccessToken, refreshToken, setRefreshToken, title, setTitle, channel}}>
        {children}
      </Tokens.Provider>
    </>
  );
}