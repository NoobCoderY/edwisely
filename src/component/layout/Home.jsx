import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";
import  Card  from "../layout/Card";
import { course_img} from "../../constants/data"
import "../styles/home.css"

const Home = () => {

 

  return(
    <>
    <div className="course_cards">
     {

        course_img.map((data,idx)=>{
            return(
                <div className="course_card">
                <Card image={data.image} course_name={data.course_name} price={idx}/>
                </div>
            )
        })
     }
     </div>
    </>
  )
};

export default Home;
