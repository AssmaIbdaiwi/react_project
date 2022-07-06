import {BrowserRouter , Routes , Route} from 'react-router-dom'


import Rooms from "./components/Room";
import ViewRoom from "./components/ViewRoom";
import Footer from "./layout/Footer";
import Navbar from "./layout/Nav";
import UserProfile from "./components/UserProfile";
import Home from './components/Home';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
<<<<<<< HEAD
      <Routes>
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/ViewRoom" element={<ViewRoom />} />
      </Routes>
=======
        <Routes>
          <Route path='/rooms' element={<Rooms/>} />
          <Route path='/' element={<Home/>} />
        </Routes>
>>>>>>> 99e335d03559c7172f6dbea91f5395f53b4e6653
      <Footer />
    </BrowserRouter>
  );
}

export default App;
