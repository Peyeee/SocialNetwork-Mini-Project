import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../src/app.css'
import Login from '../src/Componentes/Login/Login.jsx'
import NavBar from './Componentes/NavBar/NavBar'
function App() {
  return (
    <Router>
      <>

        <NavBar />
        <Login />

      </>
    </Router>
  );
}

export default App

