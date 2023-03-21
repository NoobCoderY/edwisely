import { configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "./reducer/themeSlice";
import  courseSelectorSlice  from "./reducer/courseSelectorSlice";
import ProgressSlice from "./reducer/ProgressSlice";

 
export const store = configureStore({
  reducer: {
    courseSelector:courseSelectorSlice,
    ProgressReducer:ProgressSlice
    
  },
});