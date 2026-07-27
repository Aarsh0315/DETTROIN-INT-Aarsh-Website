import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";

import PrePrimary from "./pages/Academics/PrePrimary";
import Primary from "./pages/Academics/Primary";
import Middle from "./pages/Academics/Middle";
import Daycare from "./pages/Academics/Daycare";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/gallery" element={<Gallery />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/academics/pre-primary" element={<PrePrimary />} />

      <Route path="/academics/primary" element={<Primary />} />

      <Route path="/academics/middle" element={<Middle />} />

      <Route path="/academics/daycare" element={<Daycare />} />
    </Routes>
  );
}

export default App;