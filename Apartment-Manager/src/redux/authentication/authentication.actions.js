import axios from "axios";
import { LOGIN, LOG_OUT } from "../CONSTANTS";

const Base_URL = 'http://localhost:5001'


export const loginUser = (username, password) => (dispatch) => {
    let headers = new Headers();

    headers.append('Origin','*');
    // headers.append('Content-Type', 'application/json');
    // headers.append('Accept', 'application/json');
    // headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));

    axios.post(Base_URL + '/login', JSON.stringify({username, password}), {
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => {
        const { auth, token, userID } = res.data
        dispatch({
            type: LOGIN,
            payload: { auth, token, userID },
        })
        localStorage.setItem("user", {
            useID: userID,
            token: token
        })
    }).catch(err => {
        console.log(err);
    })
    
}


export const logout = () => (dispatch) => {
    dispatch({
        type: LOG_OUT,
        payload: {}
    })
}
