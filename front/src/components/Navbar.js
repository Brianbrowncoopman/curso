import { Button, Toolbar, Typography,  } from '@mui/material';
import { Box, AppBar, Container } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

export default function NavBar() {

    const navigate = useNavigate()

  return(
    <div>
      <Box sx={{flexGrow: 1}}>
        <AppBar position='static' color='transparent'>
          <Container>
            <Toolbar>
              <Typography variant='h5' sx={{flexGrow: 1}}>
                <Link to="/" style={{textDecoration:'none', color:'black'}}>
                  Cursos BBC
                </Link>
              </Typography>  
                <Button 
                  variant='contained' 
                  color='secondary' 
                  onClick={() => navigate("/course/new")}
                >
                Crear Curso
                </Button>

                {/*<Button 
                  variant='contained' 
                  color='secondary'
                  onClick={() => navigate("/course/update")}
                >
                Editar Curso
                </Button>*/}

                {/*<Button 
                  variant='contained' 
                  color='secondary'
                  onClick={() => navigate("/course/delete")}
                >
                Eliminar Curso
                </Button>*/}

                <Button 
                  variant='contained' 
                  color='secondary'
                  onClick={() => navigate("/")}
                >
                Ver Todos Los Cursos
                </Button>
            </Toolbar>    
          </Container>  
        </AppBar>  
      </Box>  
    </div>
  );
}


