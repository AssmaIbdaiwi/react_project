import {BrowserRouter , Routes , Route} from 'react-router-dom'

import Rooms from "./components/Room";
import ViewRoom from "./components/ViewRoom";
import Footer from "./layout/Footer";
import Navbar from "./layout/Nav";
import UserProfile from "./components/UserProfile";
import Home from './components/Home';
import Register from './components/login/Register';
import Login from "./components/login/Login";
import About from './components/About';
import Contact from './components/Contact';
import { createContext, useState,useEffect } from 'react';

export const userContext = createContext();

function App() {

  const [userData , setUserData ]= useState([]);

  useEffect(() => {
    
    setUserData(JSON.parse(localStorage.getItem('user')));

  }, [])
  

  return (
    <BrowserRouter>
      <userContext.Provider value={userData}>
        <Navbar />

        <Routes>
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* if (path="/login" | path="/register"){
        }console.log(path) */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ViewRoom/:id" element={<ViewRoom />} />
          <Route path="/UserProfile" element={<UserProfile />} />
        </Routes>
        <Footer />
      </userContext.Provider>
    </BrowserRouter>
  );


}

export default App;
