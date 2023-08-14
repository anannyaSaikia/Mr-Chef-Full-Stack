
// import './App.css';
//import MainMenu from './Components/MainMenu';

//import CategoryDetails from './Components/CategoryDetails';
/* import Navbar from "./Components/Navbar"
import Loading from "./Components/loading";
import Successfullpage from "./Components/successfullpage";
import MobNavbar from "./Components/MobNavbar"; */
import AllRoute from './Components/Routes/AllRoute';
import CombinedNavbar from "./Components/Routes/CombinedNavbar";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="App">
      {/* <Navbar position={"sticky"}/> */}
      <CombinedNavbar/>
      <AllRoute/>
      <Footer/>
      {/* <MobNavbar/> */}

    </div>
  );
}

export default App;