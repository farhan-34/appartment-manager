import { LOGIN, LOG_OUT } from "../CONSTANTS";

const _initialState = {
    auth: false,
    token: null,
    userID: null
}

const authReducer = (state = _initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case LOGIN:
            return{
                ...state,
                auth: payload.auth,
                token: payload.token,
                userID: payload.userID
            };
        case LOG_OUT:
            return {
                ...state,
                auth: false,
                token: null,
                userID: null
            }
        default:
            return state;
    }
}

export default authReducer;