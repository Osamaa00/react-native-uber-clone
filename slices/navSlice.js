import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null,
}


// actions to push the information into the data layer
export const navSlice = createSlice({
    name: "nav",
    initialState,
    reducer: {
        setOrgin: (state, action) => {
            state.origin = action.payload
        },
        setDestination: (state, action) => {
            state.destination = action.payload
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload
        }
    }
});


// expose the actions to the rest of the application
export const { setOrgin, setDestination, setTravelTimeInformation } = navSlice.actions;

// selectors to pull the information out of the data layer
export const selectOrigin = state => state.nav.origin;
export const selectDestination = state => state.nav.destination;
export const selectTravelTimeInformation = state => state.nav.travelTimeInformation;

export default navSlice.reducer
