import {BrowserRouter , Routes , Route} from 'react-router-dom'


import Rooms from "./components/Room";
import Footer from "./layout/Footer";
import Navbar from "./layout/Nav";
import UserProfile from "./components/UserProfile";

function App() {

  return (
    <BrowserRouter >
      <Navbar />
        <Routes>
          <Route path='/rooms' element={<Rooms/>} />

        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
