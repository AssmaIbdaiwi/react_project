import {BrowserRouter , Routes , Route} from 'react-router-dom'


import Rooms from "./components/Room";
import ViewRoom from "./components/ViewRoom";
import Footer from "./layout/Footer";
import Navbar from "./layout/Nav";


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/ViewRoom" element={<ViewRoom />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
