import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const store = configureStore({
    reducer: {
        // counterReducer is a function that will return the initialState 
        // of the counterSlice as well as any changes we make to it
        count: counterReducer,
        // user: null,
        // todos: null
    }
})

// store ->  

/*

{
    count: 0
    user: null,
    todos: null
}

*/