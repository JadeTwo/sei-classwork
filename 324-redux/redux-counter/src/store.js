import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";

export const store = configureStore({
    reducer: {
        count: counterSlice.reducer,
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