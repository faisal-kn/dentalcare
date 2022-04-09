import NewNavbar from "./components/NewNavbar";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Services from "./pages/services/Services";
import Warranty from "./pages/Warranty";
import { Routes, Route } from "react-router-dom";
import NewPatients from './pages/NewPatients';
import Botox from "./pages/services/general/Botox";
import Cleanings from "./pages/services/general/Cleanings";
import Emergency from "./pages/services/general/Emergency";
import Crowns from "./pages/services/general/Crowns";
import Invisalign from "./pages/services/cosmetic/Invisalign";
import TeethWhitening from "./pages/services/cosmetic/TeethWhitening";
import Bonding from "./pages/services/cosmetic/Bonding";
import Veneers from "./pages/services/cosmetic/Veneers";
import Cosmetic from "./pages/services/cosmetic/Cosmetic";
import Surgical from "./pages/services/surgery/Surgical";
import Implants from "./pages/services/surgery/Implants";
import BeforeAfter from "./pages/BeforeAfter";

function App() {
  return (
    <div className="App">
      {/* <MyNavbar /> */}
      <NewNavbar/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/botox" element={<Botox />} />
        <Route path="/services/cleanings" element={<Cleanings />} />
        <Route path="/services/emergency" element={<Emergency />} />
        <Route path="/services/crowns" element={<Crowns />} />
        <Route path="/services/cosmetic" element={<Cosmetic />} />
        <Route path="/services/invisalign" element={<Invisalign />} />
        <Route path="/services/teeth-whitening" element={<TeethWhitening />} />
        <Route path="/services/bonding" element={<Bonding />} />
        <Route path="/services/veneers" element={<Veneers />} />
        <Route path="/services/surgical" element={<Surgical />} />
        <Route path="/services/implants" element={<Implants />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/warranty" element={<Warranty />} />
        <Route path="/before-after" element={<BeforeAfter />} />
        <Route path="/new-patients" element={<NewPatients/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
