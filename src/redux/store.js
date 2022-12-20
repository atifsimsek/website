import { configureStore } from "@reduxjs/toolkit"
import { languageReducer } from './languageSlice'


const store = configureStore({
    reducer: {
        languageReducer

    }
})


export default store