import MyNavbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Warrenty from "./pages/Warrenty";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      {/* <Home/> */}
      <Services/>
      {/* <AboutUs /> */}
      {/* <Warrenty /> */}
    </div>
  );
}

export default App;
