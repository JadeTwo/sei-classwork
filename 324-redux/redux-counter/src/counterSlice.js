import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        number: 0,
        likedNumbers: []
    },
    reducers: {
        increment: (state, action) => {
            // "state" in this case is the initialState of our counterSlice
            // and we can use the assignment operator thanks to immer (which RTK uses)
            state.number += 1
        },
        decrement: (state, action) => {
            state.number -= 1
        },
        reset: (state, action) => {
            state.number = 0
        },
        setToX: (state, action) => {
            console.log(action)
            state.number = Number(action.payload)
        }, 
        likeThisNumber: (state, action) => {
            state.likedNumbers.push(Number(action.payload))
        }
    }
})

/*

    dispatch({ type: 'counter/increment' })

    dispatch(increment())

*/

// exporting our action creators so that we don't need to make them ourselves 
export const { increment, decrement, reset, setToX, likeThisNumber } = counterSlice.actions

export default counterSlice.reducer

/*

{
    type: 'counter/increment',
    payload: 'info'
}

*/