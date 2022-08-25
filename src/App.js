import React from 'react';
import { NavBar } from './components/NavBar';
import BookTable from './components/BookTable';
import { Routes, Route } from "react-router-dom";
import FormBook from './components/FormBook';

export default function App() {
  return (
    <div>
        <NavBar/>
        <Routes>
            <Route path='booktable' element={<BookTable/>} />
            <Route path='formbook' element={<FormBook/>} />     
        </Routes>
    </div>
  )
}
