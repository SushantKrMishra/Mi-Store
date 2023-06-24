import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter } from "react-router-dom";
import Slider from "./components/Slider.jsx";
import data  from "./data/data.json";
import Offers from './components/Offers.jsx'
function App() {
  return (
    <BrowserRouter>
      <PreNavbar />
      <Navbar />

      <Slider start={data.banner.start} />
      <Offers offers ={data.offer}/>
    </BrowserRouter>
  );
}

export default App;
