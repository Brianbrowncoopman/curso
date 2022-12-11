import { 
  Button, 
  Card, 
  CardContent, 
  CircularProgress, 
  Grid, 
  TextField, 
  Typography 
} from '@mui/material';
import { useState, useEffect } from 'react';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { grey } from '@mui/material/colors';


export default function CourseForm() {

  const [course, setCourse] = useState({
    name_course: "",
    description_course: "",
    kind: "",
    image_course: "",
    created_on: "NOW",
    
  });

  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);


  const navigate = useNavigate();
  const params = useParams();


  const handleSubmit =  async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const res = await fetch("http://localhost:4001/course/new", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(course),
    });
    
    const data = await res.json();
    setLoading(false);
    navigate('/');
    
  };

  const handleChange = (e) => {
    setCourse({...course, [e.target.name]: e.target.value});
  };

  const loadCourse = async (id) => {
    const res = await fetch (`http://localhost:4001/course/${id}`, {
      method: "PUT",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(course),
    });
    const data = await res.json()
    
    console.log(data);
  };

  useEffect(() => {
    if (params.id) {
      loadCourse(params.id);
    }
  }, [params.id])

  return(
    <Grid 
      container 
      direction='column' 
      alignItems='center' 
      justifyContent='center'
    >
      <Grid item xs={3}>
        <Card 
          sx={{
            mt:10,
            width: 500,
            border: 1,
            bordercolor: grey,
            borderRadius: 5
            }}
          style={{
            backgroundColor: 'lightyellow',
            padding: '1rem'
            }}
        >
          <Typography variant='5' textAlign='center' color='primary'>Crear un curso</Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField 
                variant='filled'
                label='Titulo de tu curso'
                sx={{
                  display: 'block',
                  margin: '.5rem 0'
                }}
                name='name_course'
                onChange={handleChange}
                value={course.name_course}
                inputProps={{style: {color: 'grey'}}}
                InputLabelProps={{style:{color:'blue'}}}
              />

              <TextField 
                variant='filled'
                label='Ingresa la descripcion'
                multiline
                rows={9}
                sx={{
                  display: 'block',
                  margin: '.5rem 0'
                }}
                name='description_course'
                onChange={handleChange}
                value={course.description_course}
                inputProps={{style: {color: 'grey'}}}
                InputLabelProps={{style:{color:'blue'}}}
              />

              <TextField 
                variant='filled'
                label='nivel del curso'
                multiline
                rows={1}
                sx={{
                  display: 'block',
                  margin: '.5rem 0'
                }}
                name='kind'
                onChange={handleChange}
                value={course.kind}
                inputProps={{style: {color: 'grey'}}}
                InputLabelProps={{style:{color:'blue'}}}
              />
              <TextField 
                variant='filled'
                label='imagen url'
                multiline
                rows={9}
                sx={{
                  display: 'block',
                  margin: '.5rem 0'
                }}
                name='image_course'
                onChange={handleChange}
                value={course.image_course}
                inputProps={{style: {color: 'grey'}}}
                InputLabelProps={{style:{color:'blue'}}}
                Button type='button' className='btn'
              />
              
              <Button 
                variant='contained'
                color='primary'
                type='submit' 
                disabled={
                  !course.name_course || !course.description_course || !course.kind || !course.image_course
                }         
              >
              {loading ? (<CircularProgress 
                color='secondary'
                size={24}
              />) : ('Create')}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}