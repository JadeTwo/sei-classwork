import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const store = configureStore({
    reducer: {
        count: counterReducer,
        user: null,
        todos: null
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