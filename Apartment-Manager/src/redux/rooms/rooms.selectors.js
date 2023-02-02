import { createSelector } from "@reduxjs/toolkit"

const roomsSelector = (state) => state.rooms

export const selectAllRooms = createSelector([roomsSelector], (rooms) => rooms.RoomsList)