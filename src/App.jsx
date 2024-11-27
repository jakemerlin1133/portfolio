import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";

import { Home } from "./pages/Home";
import { AboutMe } from "./pages/AboutMe";
import { MyProjects } from "./pages/MyProjects";
import { ContactMe } from "./pages/ContactMe";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<MyProjects />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
