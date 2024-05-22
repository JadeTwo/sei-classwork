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
            state -= 1
        },
        reset: (state, action) => {
            state = 0
        },
        setToX: (state, action) => {
            state = action.payload
        }, 
    }
})

/*

    dispatch({ type: 'counter/increment' })

    dispatch(increment())

*/

// exporting our action creators so that we don't need to make them ourselves 
export const { increment, decrement, reset } = counterSlice.actions

export default counterSlice.reducer

/*

{
    type: 'counter/increment',
    payload: 'info'
}

*/