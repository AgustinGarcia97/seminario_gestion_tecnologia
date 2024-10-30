import {configureStore} from "@reduxjs/toolkit";
import {chatOPIASlice} from "./slices/chatopiaSlice.js";

export const store = configureStore(
    {
        reducer:{
            chatOPIA: chatOPIASlice.reducer,
        },
    }
)
