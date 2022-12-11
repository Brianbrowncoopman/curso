import { useEffect, useState } from "react";
import { Button, Card, CardContent, CardMedia, Typography,  } from '@mui/material';
import { useNavigate, } from 'react-router-dom';
import Grid from '@mui/material/Grid';




export default function CourseList() {

  const [courses, setCourses] = useState([]);

  const navigate = useNavigate();
  

  const loadCourses = async () => {
    const res = await fetch('http://localhost:4001/course');
    const data = await res.json();
    setCourses(data)
  }

  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:4001/course/${id}`, {
      method: "DELETE",
    }) 

    setCourses(courses.filter(course => course.id !== id));

    const data = await res.json();
    console.log(data);
  }

  useEffect(() => {
    loadCourses()
  } , []);

  return (
    <>
      <br />
      {courses.map((course) => (
        <Grid 
          container 
          spacing ={1}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Card style={{
            marginBottom: '1rem',
            backgroundColor: 'grey',
            width: '50',
            height: '50',
          }}>
            <CardContent style={{
              display: "flex",
              justifyContent: "space-between",
              
            }}>
              <CardMedia sx={{ maxWidth: 345 }}/>
                <Grid item sx={2} md={16}>
                  <Typography>Id:{course.id}</Typography>
                  <br />
                  <Typography>Nombre del curso: {course.name_course}</Typography>
                  <br />
                  <Typography>Descripcion del curso: {course.description_course}</Typography>
                  <br />
                  <Typography>Dificultad del curso: {course.kind}</Typography>
                  <br />
                  <CardMedia
                    component="img"
                    width="300"
                    image={course.image_course}
                    src={course.image_course}
                    alt={course.name_course}
                  />
                </Grid>
          <div>  
            <Button
              variant="contained"
              color="inherit"
              onClick={() => navigate(`/course/${course.id}/edit`)}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="warning"
              onClick={() => handleDelete(course.id)}
            >
              Delete
            </Button>
          </div>    
            </CardContent>
          </Card>
        </Grid>
        
      ))}
    </>
  );
}








/////Courselist