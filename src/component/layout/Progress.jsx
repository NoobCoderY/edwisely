import React from "react";
import "../styles/Progress.css";
import LinearProgress from "@mui/material/LinearProgress";
import { useSelector } from "react-redux";
import topicArr from "../../constants/topic.json"

const Progress = () => {
  const select_course_name = useSelector(
    (state) => state.courseSelector.select_course
  );
  const progressCompleted = useSelector(
    (state) => state.ProgressReducer
  );

  
  
  let indexProgress = 0;
  React.useEffect(() => {
    setProgress(progressCompleted[indexProgress].progessCounter)
  }, [progressCompleted])

  const dd = progressCompleted.map((v,i)=>{
    if(v.id===select_course_name) {
      indexProgress=i
    }
  })

  console.log();

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
let p=0;
 const arr= getData().map((item,index)=>{
 let a= item.topic_name.length
 

 p = a + p ;
 

  })
  console.log(p,progressCompleted);


   


  const [progress, setProgress] = React.useState(progressCompleted[indexProgress].progessCounter);
  return (
    <>
      <div className="progress_main_container">
        <h1>{select_course_name}</h1>

        <div className="progrss_bar">
          <h4>{progress} of {p} Complete. ({((progress/p)*100).toFixed(0)}%)</h4>
          <div className="progress" style={{marginTop:"1em"}}>
            <LinearProgress variant="determinate" value={progress} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Progress;
