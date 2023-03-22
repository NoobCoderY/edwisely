import React from "react";
import axios from "axios";
import { useEffect } from "react";
import "../styles/course.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const Courses = () => {
  const str =
      "Most popular course {course_name} trusted by over 1,00,000+ students! Built with years of experience by industry experts the course gives you acomplete package of video lectures, practice problems, quizzes, discussion forums, and contests. Start Today!";
  const [course_name, setcourse_name] = React.useState([]);
  const [course_instructor, setcourse_instructor] = React.useState([]);
  const [course_url, setcourse_url] = React.useState([]);

  const getData = (course) => {
    
    const options = {
      method: "GET",
      url: `https://udemy-course-scrapper-api.p.rapidapi.com/${course}`,
      headers: {
        "X-RapidAPI-Key": "33bebd7af3msh0147996a029b96ap1a5050jsne317e6a4a2f1",
        "X-RapidAPI-Host": "udemy-course-scrapper-api.p.rapidapi.com",
      },
    };
    return options;
  };
  useEffect(() => {
    axios
      .request(getData("course-names"))
      .then(function (response) {
        setcourse_name(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    axios
      .request(getData("course-names/course-instructor"))
      .then(function (response) {
        setcourse_instructor(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    axios
      .request(getData("course-names/course-instructor/course-url"))
      .then(function (response) {
        setcourse_url(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  let arr1=[];
  let arr2=[];
  let arr3=[];
if(course_name!==undefined){
   arr1 = Object.values(course_name).slice(0, 48);
   arr2 = Object.values(course_instructor).slice(0, 48);
   arr3 = Object.values(course_url).slice(0, 48);
}
  const [fullview, setFullview] = React.useState(60);

  return (
    <>{arr1.length===0 ? <Stack sx={{ color: 'grey.500' ,marginTop:"10em" }} justifyContent="center"
    spacing={2} direction="row " >
    <CircularProgress color="secondary"size={100} />
    <CircularProgress color="success"size={100} />
    <CircularProgress color="inherit"size={100} />
  </Stack>:<div className="main_course_container">
    {
      arr1?.map((data,idx)=>{
        let p=[];
        if(arr3[idx]!==undefined){
         p = Object.values(arr3[idx])
        }
        return(
          <div className="main_course_card">
          <div className="course_code_name">
            <h3>{data.course_name.substring(0,34)}...</h3>
          </div>
         
          <Typography variant="h6" color="text.secondary">
          {str.substring(0, fullview)}...
          {fullview === 60 && (
            <Button
              onClick={() => {
                setFullview(str.length);
              }}
            >
              {" "}
              More
            </Button>
          )}
          {fullview === str.length && (
            <Button
              onClick={() => {
                setFullview(60);
              }}
            >
              {" "}
              Less
            </Button>
          )}
        </Typography>
        

          <div className="main_course_card_button">
            <h4>{arr2[idx]?.instructor.substring(0,15)}...</h4>
            
            <a href={p[0]}>
            <button>Start course</button>
            </a>
          </div>
        </div>
        )
      })
    }
     
       
      </div>}
     
    </>
  );
};

export default Courses;
