import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: (state, action) => {
            // "state" in this case is the initialState of our counterSlice
            // and we can use the assignment operator thanks to Immer (which RTK uses)
            state += 1
        },
        decrement: (state, action) => {
            state -= 0
        },
        reset: (state, action) => {
            state = 0
        }
    }
})

export const { increment, decrement, reset } = counterSlice.actions

/*

{
    type: 'counter/increment'
}

*/