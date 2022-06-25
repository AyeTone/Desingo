import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CallToAction, Footer, Navbar } from "./components";
import ScrollToTop from "./context/ScrollToTop";
import {
  About,
  AppDesign,
  Contact,
  GraphicDesign,
  Home,
  Locations,
  WebDesign,
} from "./pages";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/webdesign" element={<WebDesign />} />
            <Route path="/appdesign" element={<AppDesign />} />
            <Route path="/graphicdesign" element={<GraphicDesign />} />
            <Route path="/about" element={<About />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </ScrollToTop>
        <CallToAction />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
