
import { createSlice } from "@reduxjs/toolkit";
const initialState={
    mode:false
}
export const themeSlice = createSlice({
    name: "theme",
    initialState: initialState,
    reducers: {
      changeTheme: (state, action) => {
        state.mode = action.payload;
      }
    }
   });