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
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/ViewRoom/:id" element={<ViewRoom />} />
        <Route path="/UserProfile" element={<UserProfile />} />
       
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
