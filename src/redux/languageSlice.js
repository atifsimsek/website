import { createSlice } from "@reduxjs/toolkit"

const languageSlice = createSlice({
    name: "language",
    initialState: {
        language: "tr"
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.language = action.payload
        }

    }
})



export const languageReducer = languageSlice.reducer
export const { changeLanguage } = languageSlice.actions