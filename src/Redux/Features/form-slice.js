import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInput: {
    name: "",
    email: "",
    password: "",
  },
};

export const formSlice = createSlice({
  name: "formSlice",
  initialState,
  reducers: {
    setUserDataInput(state, action) {
      state.userInput = action.payload;
    },
    setClearStatus(state) {
      state.userInput = {
        name: "",
        email: "",
        password: "",
      };
    },
  },
});

export const { setUserDataInput, setClearStatus } = formSlice.actions;
export default formSlice.reducer;
