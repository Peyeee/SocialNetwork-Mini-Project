import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../src/app.css'
import Login from '../src/Componentes/Login/Login.jsx'
import Home from '../src/Componentes/Home/Home.jsx'
import NavBar from './Componentes/NavBar/NavBar'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
