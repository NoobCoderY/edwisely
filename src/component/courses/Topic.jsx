import React from "react";
import "../styles/topic.css";
import {useNavigate} from "react-router-dom";

const Topic = ({data}) => {
  const navigate=useNavigate()
  return (
    <div className="topic_main_container">
      <div className="topic_card">
        <div className="topic_info">
          <div className="topic_name">
            <h3>{data.chapter}</h3>
          </div>
          <div
            className="content"
            style={{ marginTop: "0.4em", display: "flex", gap: "2em" }}
          >
            <h5>31 Video</h5>
            <h5>duration-5hr</h5>
          <h5>  Completed 0/31</h5>
          </div>
        </div>
        <div className="topic_button">
             <button onClick={()=>{
              navigate(`/chapters/${data.chapter}`)
             }}>
                Start Track
            </button>
        </div>
      </div>
    </div>
  );
};

export default Topic;
