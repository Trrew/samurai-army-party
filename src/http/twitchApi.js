import axios from "axios";

export const getTwitchToken = async() => {
    const data = {
        client_id: 'ou4j7d9okm8cy3me1sct2ohs4ams7q',
        client_secret: 'p95geanw1h7c5lfrz45577td4ih0ou',
        grant_type: 'client_credentials'
      };

    const res = await axios.post('https://id.twitch.tv/oauth2/token', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    return res.data.access_token;
}

export const getUserId = async (accessToken, channel) => {
    const res = await axios.get(`https://api.twitch.tv/helix/users?login=${channel}`, {
        headers: {
            'Client-ID': 'ou4j7d9okm8cy3me1sct2ohs4ams7q',
            'Authorization': `Bearer ${accessToken}`
        }
    })
    return res.data.data[0].id;
}


export const getNameOfStream = async(accessToken, userId) => {
    const res = await axios.get(`https://api.twitch.tv/helix/streams?user_id=${userId}`,  {
    headers: {
        'Client-ID': 'ou4j7d9okm8cy3me1sct2ohs4ams7q',
        'Authorization': `Bearer ${accessToken}`
    }  
    })
    
    return typeof res.data.data[0]=== "undefined" ? "There's no active watch party at the moment. Come back later!" : res.data.data[0].title;
}