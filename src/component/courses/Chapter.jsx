import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useSelector, useDispatch } from "react-redux";
import { changeProgress, changeCompleted } from "../../Redux/reducer/ProgressSlice";
import topicArr from "../../constants/topic.json";
import "../styles/chapter.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Progress from "../layout/Progress";

const Chapter = () => {
  const [Chapter_name, setChapter_name] = React.useState();
  const [Exercise, setExercise] = React.useState()
  let { id } = useParams();
  const select_course_name = useSelector(
    (state) => state.courseSelector.select_course
  );
  const progress = useSelector((state)=>state.ProgressReducer)
  let indexProgress = 0;

  const dd = progress?.map((v,i)=>{
    if(v.id===select_course_name) {
      indexProgress=i
    }
  })

  const courseProcess = progress[indexProgress]

  const dispatch = useDispatch()
  const getData = () => {
    let data;
    topicArr.main_data?.forEach((key) => {
      if (key.courseName === select_course_name) {
        data = key.data;
      }
    });
    return data;
  };
  useEffect(() => {
    let arrdata = getData();
    let dummyTopic_name;
    let dummyexcercise;
    arrdata?.forEach((data) => {
      if (data.chapter === id) {
        // console.log(data.Excercise)
        dummyTopic_name = data.topic_name;
        dummyexcercise=data.Excercise;
      }
    });
   setChapter_name(dummyTopic_name)
   setExercise( dummyexcercise);
   
  }, [id]);
  const [videoLink, setvideoLink] = React.useState(
    localStorage.getItem("videoLink")
    ? (localStorage.getItem("videoLink")):""
  );
  const [article, setarticle] = React.useState( localStorage.getItem("articleLink")
  ? (localStorage.getItem("articleLink")):"")
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
console.log(Exercise);
  return (
    
    <>
    <Progress/>
      <Box
      padding={{sm:'0', md:'2em'}}
        sx={{
          width: "100%",
          typography: "body1",
          marginTop: "2em",
        }}
      >
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Chapters" value="1" />
              <Tab label="Excercise" value="2" />
              {/* <Tab label="Item Three" value="3" /> */}
            </TabList>
          </Box>
          <TabPanel value="1">
            <div className="chapter_main_conatiner">
              <div className="chapter_cards">
                {Chapter_name?.map((data,idx) => {
                  
                  return (
                    <>
                      <div className="chapter_card" onClick={(e)=>{
                      setvideoLink(data.video_link)
                      setarticle(data.article_link)
                      localStorage.setItem("videoLink",data.video_link)
                      localStorage.setItem("articleLink",data.article_link)
                      
                  
                      }}>
                        <div className="chapter_name">
                          <h3>{data.video_name}</h3>
                          <h6 style={{ color: "rgba(129, 129, 165, 1)" }}>
                            {`duration - ${(6*idx)+7} min`}
                          </h6>
                        </div>
                        <div className="select_chapter">
                          <input
                            type="checkbox"
                            name="my-checkbox"
                            defaultChecked={courseProcess.completed_topic.includes(data.video_name)?true:false}
                            // checked={data.progress}
                            onChange={
                              (e)=>{
                                dispatch(changeProgress({course_name:select_course_name,value:e.target.checked}));
                                dispatch(changeCompleted({course_name:select_course_name,value:data.video_name}));
                                console.log(e.target.checked)
                              }
                            }
                            style={{ width: "20px", height: "20px" }}
                          />
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="resources_section">
                <iframe
                  src={videoLink}
                  width="100%"
                  height="420"
                  style={{ border: "1px solid black;" }}
                  title="vdo"
                ></iframe>
                <h2 style={{ marginTop: "1em" }}>Documentation</h2>
                <div className="article_section">
                  <h3>Links &nbsp; -</h3>
                  <a href={article}>
                    {" "}
                    Click Here
                  </a>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="2">
           <div className="exercse_container">
            {Exercise?.map((data,idx)=>{
              return(
               <div className="article_section">
               <h3>Question {1+idx} &nbsp; -</h3>
               <a href={data}>
                 {" "}
                 Click Here
               </a>
             </div>
       
            )})}
             </div>
          
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default Chapter;
