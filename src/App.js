import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentForm from './StudentForm';
import Table from './Table'

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

      {/* <Table/> */}

    </>
    // <div>
    //   <StudentForm/>
    //   <Table/>
    // </div>
  )
}

export default App