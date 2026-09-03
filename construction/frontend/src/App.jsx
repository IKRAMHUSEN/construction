import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/frontend/Home';
import About from './components/frontend/About';
import Services from './components/frontend/Services';
import Projects from './components/frontend/Projects';
import Blogs from './components/frontend/Blog';
import './assets/css/style.scss';
import ContactUs from './components/frontend/ContactUs';
import Login from './components/backend/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/backend/Dashboard';
import RequiredAuth from './components/common/RequiredAuth';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='about' element={<About />} />
          <Route path='services' element={<Services />} />
          <Route path='projects' element={<Projects />} />
          <Route path='blogs' element={<Blogs />} />
          <Route path='contact' element={<ContactUs />} />
          <Route path='admin/login' element={<Login />} />
          <Route path='admin/dashboard' element={
            <RequiredAuth>
              <Dashboard />
            </RequiredAuth>
          } />





        </Routes>
      </BrowserRouter>
      <ToastContainer
        position='top-center'
      />
    </>
  )
}

export default App
