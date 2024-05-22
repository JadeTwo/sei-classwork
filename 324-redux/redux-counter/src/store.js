import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        count: null,
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