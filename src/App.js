import MyNavbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Warrenty from "./pages/Warrenty";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/warrenty" element={<Warrenty />} />
      </Routes>
    </div>
  );
}

export default App;
