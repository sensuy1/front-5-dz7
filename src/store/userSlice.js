import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            name: '',
            surname: '',
            email: ''
        }
    },
    reducers: {
        userInfo: (state, action) => {
            state.user = action.payload
        }
    }
})

export const { userInfo } = userSlice.actions;
export const userReducer = userSlice.reducer

