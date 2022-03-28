import { Routes, Route } from 'react-router-dom'
import React, { useState } from 'react'
import NavbarComponent from './layout/NavbarComponent'
import ViciLeadsPage from './Pages/ViciLeadsPage'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import { ThemeProvider } from 'react-bootstrap'
import axios from 'axios'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [userData, setUserData] = useState(null);
  const getUser = () => {
    axios({
        method: "GET",
        withCredentials: true,
        url: "http://localhost:5000/auth/user",
    }).then((res) => {
        setUserData(res.data)
        console.log(res.data)
  })}

  return (
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
        <div className="App">
          <NavbarComponent userData={userData}/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ViciLeadsPage" element={<ViciLeadsPage />} />
            <Route path="/LoginPage" element={<LoginPage getUser={getUser} />}/>
          </Routes>
        </div>
    </ThemeProvider>
  );
}

export default App;
