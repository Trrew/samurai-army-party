import axios from "axios"

export const getToken = async(code) => {
    const tokenUrl = 'https://api.matrica.io/oauth2/token';
    const decoded = decodeURIComponent(code); // you have to decode "code" like decode redirect_uri
    const data = {
        grant_type: 'authorization_code',
        code: decoded, 
        redirect_uri: 'http://localhost:3000/auth',
        client_id: 'bf4ca2c4fb1defc',
        code_verifier: "q8bLWLE2VD3CkHfrHTZELKD7FbysBV8V7Uw9D3BxspA",
        code_challenge: "tb08UgoBiEbrMQGZ48ADueo5k5NQZUtjIhOHb8AjD1s"
    };
    const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded' 
        }
    };
    return axios.post(tokenUrl, data, config);
}

export const getRefreshToken = async (refreshToken) => {
    const tokenUri = "https://api.matrica.io/oauth2/token";
    const data = {
        refresh_token: refreshToken,
        grant_type: "refresh_token",
        client_id:  "bf4ca2c4fb1defc",
    }
    const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded' 
        }
    };
    return axios.post(tokenUri, data, config)
}