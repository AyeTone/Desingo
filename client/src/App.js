import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CallToAction, Footer, Navbar } from "./components";
import Loading from "./components/UI/Loading";
import ScrollToTop from "./context/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const WebDesign = lazy(() => import("./pages/WebDesign"));
const GraphicDesign = lazy(() => import("./pages/GraphicDesign"));
const Locations = lazy(() => import("./pages/Locations"));
const Contact = lazy(() => import("./pages/Contact"));
const AppDesign = lazy(() => import("./pages/AppDesign"));

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ScrollToTop>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/Designo/" element={<Home />} />
              <Route path="/webdesign" element={<WebDesign />} />
              <Route path="/appdesign" element={<AppDesign />} />
              <Route path="/graphicdesign" element={<GraphicDesign />} />
              <Route path="/about" element={<About />} />
              <Route path="/locations" element={<Locations />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </ScrollToTop>
        <CallToAction />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
