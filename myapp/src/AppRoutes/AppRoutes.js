import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from '../Pages/HomePage/HomePage';
import Aboutpage from '../Pages/AboutPage/AboutPage';
import Header from '../Components/Header';
import ListPage from '../Pages/ListPage/ListPage';

const AppRouters = () => {
  const [student, setStudent] = useState([]);

  const handleAddStudent = (newStudent) => {
    setStudent([...student, newStudent]);
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/home' element={<Homepage />} />
        <Route path='/about' element={<Aboutpage onAddStudent={handleAddStudent} />} />
        <Route path='/ListPage' element={<ListPage students={student} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouters;