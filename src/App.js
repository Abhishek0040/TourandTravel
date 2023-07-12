import "./styles.css";
import React from "react";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Service from "./Routes/Service";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="ContactUs" element={<Service />} />
      </Routes>
    </div>
  );
}
