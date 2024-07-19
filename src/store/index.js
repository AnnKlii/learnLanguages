import { configureStore } from "@reduxjs/toolkit";
import { wordReducer } from "./slices/wordSlice";

export const store = configureStore({
    reducer: {
        word: wordReducer,
    }
})