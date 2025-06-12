import "./App.css";
import Navbar from "./Component/Navbar.jsx";
import Tagline from "./Component/Tagline.jsx";
import Banner2 from "./Component/Banner2.jsx";
import Accommodation from "./Component/Accommodation.jsx";
import Package from "./Component/Package.jsx";
import Wellness from "./Component/Wellness.jsx";
import About from "./Component/About.jsx";
import CoperateEvents from "./Component/CoperateEvents.jsx";
import Footer from "./Component/Footer.jsx";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Tagline />
      <Banner2 />
      <Accommodation />
      <Package />
      <Wellness />
      <About />
      <CoperateEvents />
      <Footer />
    </div>
  );
}

export default App;
