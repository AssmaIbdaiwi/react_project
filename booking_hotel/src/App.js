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



function App() {

  return (
    <BrowserRouter>
      <Navbar />
    
      <Routes>
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
     
        <Route path="/ViewRoom/:id" element={<ViewRoom />} />
        <Route path="/UserProfile" element={<UserProfile />} />
       
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
