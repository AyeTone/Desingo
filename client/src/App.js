import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CallToAction, Footer, Navbar } from "./components";
import ScrollToTop from "./context/ScrollToTop";
import { Home } from "./pages";
import WebDesign from "./pages/WebDesign";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/webdesign" element={<WebDesign />} />
          </Routes>
        </ScrollToTop>
        <CallToAction />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
