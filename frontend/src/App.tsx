import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Personal from "./pages/Personal/Personal";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/personal/*" element={<Personal />} />{" "}
        {/* Wildcard for nested routes */}
      </Routes>
    </Router>
  );
};

export default App;
