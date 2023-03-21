import { createSlice } from "@reduxjs/toolkit";
const initialState =localStorage.getItem("ProgressReducer")
? JSON.parse(localStorage.getItem("ProgressReducer")):[
    {
        id:"dsa-self-paced using c++ and java",
        progessCounter:0,
        completed_topic:[]
    },
    {
        id:"c-Programming-basic-to-advanced",
        progessCounter:0,
        completed_topic:[]
    },
    {
        id:"Java-Programming-basic-to-advanced",
        progessCounter:0,
        completed_topic:[]
    },
    {
        id:"Java-Programming-basic-to-advanced dsa",
        progessCounter:0,
        completed_topic:[]
    },
    {
        id:"Full Stack Development with React & Node JS",
        progessCounter:0,
        completed_topic:[]
    },
]
 const ProgressSlice = createSlice({
    name: "ProgressReducer",
    initialState: initialState,
    reducers: {
      changeProgress: (state, action) => {
       for(let i=0;i<state.length;i++)
       {
        if(state[i].id===action.payload.course_name)
        {
            if(action.payload.value){
                state[i].progessCounter=1+state[i].progessCounter;
            }
            else{
                if(state[i].progessCounter>0)
                state[i].progessCounter=state[i].progessCounter-1;
            }
        }
       }
       localStorage.setItem("ProgressReducer", JSON.stringify(state));
      },
      changeCompleted:(state,action)=>{
        for(let i=0;i<state.length;i++)
        {
            if(state[i].id===action.payload.course_name)
            {
                
                if(state[i].completed_topic.includes(action.payload.value)){
                    state[i].completed_topic.splice(state[i].completed_topic.indexOf(action.payload.value),1);
                }
                else{
                    console.log(action.payload.value)
                    state[i].completed_topic.push(action.payload.value)
                }
            }
        }
        localStorage.setItem("ProgressReducer", JSON.stringify(state));
      }
    }
   });

   export default ProgressSlice.reducer;
   export const { changeProgress, changeCompleted } = ProgressSlice.actions;