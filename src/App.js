import MyNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Warranty from "./pages/Warranty";
import NewPatients from "./pages/NewPatients";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/warranty" element={<Warranty />} />
        <Route path="/patients" element={<NewPatients />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
