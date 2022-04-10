import { configureStore } from "@reduxjs/toolkit"
import widthSlice from "./widthSlice"

const store = configureStore({
    reducer: {
        width: widthSlice.reducer
    }
})

export default store;