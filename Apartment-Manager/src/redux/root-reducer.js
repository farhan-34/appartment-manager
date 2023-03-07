import { combineReducers } from "@reduxjs/toolkit";
import apartmentReducer from "./apartments/apartments.reducer";
import authReducer from "./authentication/authentication.reducer";
import roomsReducer from "./rooms/rooms.reducer";
import themeReducer from "./theme/theme.reducer";


const rootReducer = combineReducers({
    theme: themeReducer,
    apartments: apartmentReducer,
    rooms: roomsReducer,
    session: authReducer
})


export default rootReducer