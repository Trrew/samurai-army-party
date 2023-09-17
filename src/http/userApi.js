import axios from "axios"

export const getNfts = async(accessToken) => { 
    const api = axios.create({
    baseURL: 'https://api.matrica.io',
    headers: {
        Authorization: `Bearer ${accessToken}` 
    }
    });

    const data = await api.get('/oauth2/user/nfts')
    return data.data[0]
}

export const getUser = async(accessToken) => {
    const api = axios.create({
    baseURL: 'https://api.matrica.io',
    headers: {
        Authorization: `Bearer ${accessToken}` 
    }
    });
    
    const data = await api.get('/oauth2/user/profile')
    return data.data.username
}