import { createSlice } from "@reduxjs/toolkit";
const initialState={
    select_course:localStorage.getItem("selectCourse")
    ? (localStorage.getItem("selectCourse")):""
}
 const courseSelectorSlice = createSlice({
    name: "courseSelector",
    initialState: initialState,
    reducers: {
      changeCourse: (state, action) => {
        state.select_course = action.payload;
      }
    }
   });

   export default courseSelectorSlice.reducer;
   export const {changeCourse } = courseSelectorSlice.actions;