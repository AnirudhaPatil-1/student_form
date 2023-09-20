import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentForm from './StudentForm';

import Table from './StudentTable';

import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          
          <Route path='/' element={<StudentForm />} />
          <Route path='/table' element={<Table />} />
        </Routes>
      </Router>

      

    </>
    
  )
}

export default App