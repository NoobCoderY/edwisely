import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { useSelector, useDispatch } from "react-redux";
import { changeCourse } from "../../Redux/reducer/courseSelectorSlice";
import { useNavigate } from "react-router-dom";

export default function ImgMediaCard({ image, course_name, price }) {
  const str =
    "Most popular course  trusted by over 1,00,000+ students! Built with years of experience by industry experts the course gives you acomplete package of video lectures, practice problems, quizzes, discussion forums, and contests. Start Today!";
  const select_course_name = useSelector(
    (state) => state.courseSelector.select_course
  );
  // console.log(select_course_name);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [fullview, setFullview] = React.useState(60);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontSize: "20px" }}
        >
          {course_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {str.substring(0, fullview)}
          {fullview === 60 && (
            <Button
              onClick={() => {
                setFullview(str.length);
              }}
            >
              {" "}
              More...
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
      </CardContent>
      <CardActions className="card__button">
        <Box sx={{ fontWeight: "600" }}>₹{price * 100 + 1000}</Box>
        <Button
          size="small"
          sx={{
            backgroundColor: "green",
            color: "white",
            "&:hover": { backgroundColor: "green" },
            padding: "0.5em",
          }}
          onClick={(e) => {
            dispatch(changeCourse(course_name));
            localStorage.setItem("selectCourse", course_name);
            navigate("/coursetrack");
          }}
        >
          Explore{" "}
        </Button>
      </CardActions>
    </Card>
  );
}
