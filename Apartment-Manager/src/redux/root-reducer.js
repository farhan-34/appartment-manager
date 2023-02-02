import { combineReducers } from "@reduxjs/toolkit";
import apartmentReducer from "./apartments/apartments.reducer";
import roomsReducer from "./rooms/rooms.reducer";
import themeReducer from "./theme/theme.reducer";


const rootReducer = combineReducers({
    theme: themeReducer,
    apartments: apartmentReducer,
    rooms: roomsReducer
})


export default rootReducer