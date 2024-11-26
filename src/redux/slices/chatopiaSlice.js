import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
  isBotResponding: false,
};

export const chatOPIASlice = createSlice({
  name: "chatOPIA",
  initialState,

  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    setIsBotResponding: (state, action) => {
      state.isBotResponding = action.payload;
    },
  },
});

export const { addMessage, setIsBotResponding } = chatOPIASlice.actions;
