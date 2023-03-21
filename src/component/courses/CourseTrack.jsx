import React from 'react'
import { LinearProgress } from '@mui/material'
import Topic from './Topic'
import topicArr from "../../constants/topic.json"

import Progress from '../layout/Progress'
import { useSelector, useDispatch } from "react-redux";

const CourseTrack = () => {
  const select_course_name = useSelector(
    (state) => state.courseSelector.select_course
  );
  // console.log(select_course_name);

  const getData=()=>{
    let data;
    topicArr.main_data.forEach((key)=>{
      if(key.courseName===select_course_name)
      {
        data=key.data;
      }
    })
    return data;
  }

  const [topic_name, settopic_name] = React.useState(getData)
  // console.log(topic_name);
  return (
   <>
   <Progress/>
  
{topic_name.map((data,idx)=>{
  return(
    <Topic data={data}/>

  )
})}
   </>
  )
}

export default CourseTrack