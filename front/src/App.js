import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CourseList from './components/CourseList';
import CourseForm from './components/CourseForm';
import { Container } from '@mui/material';
import Menu from './components/Navbar';
import CourseUpdate from './components/CourseUpdate';
import Footer from './components/footer';

function App() {


  return (
    <BrowserRouter>
      <Menu />
      <Container>
        <Routes>
          <Route path='/' element={<CourseList />} /> {/*trae todos los cursos*/}
          <Route path='/course/new' element={<CourseForm />} />{/* crear curso*/}
          
          <Route path='/course/:id/edit' element={<CourseForm />} />{/*actualiza un curso */}
      </Routes>
      </Container>
      <br />
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;
