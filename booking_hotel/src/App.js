
import Rooms from "./components/Room";
import ViewRoom from "./components/ViewRoom";
import Footer from "./layout/Footer";
import Navbar from "./layout/Nav";


function App() {

  return (
    <div >
        <Navbar />

        <Rooms />
        <Footer />
        <ViewRoom/>


    </div>
  );
}

export default App;
