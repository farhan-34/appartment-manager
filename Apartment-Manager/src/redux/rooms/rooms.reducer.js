const _initialState = {
    RoomsList: [
        {
            ID: 1,
            AppartmentId: 1,
            Rent: 10000,
            Description: 'middle room',
            HaveCupboard: true,
            HaveAC: false,
            HaveWashroom: true,
            WashroomType: 'Cammod',
            UserId: 2
        },
        {
            ID: 2,
            AppartmentId: 1,
            Rent: 10000,
            Description: 'middle room',
            HaveCupboard: true,
            HaveAC: false,
            HaveWashroom: true,
            WashroomType: 'Cammod',
            UserId: 2
        }
    ]
}

const roomsReducer = (state = _initialState, action) => {
    const { type, payload } = action;
    switch (type) {    
        default:
            return state
    }
}


export default roomsReducer;