import React from "react";
import "./App.css";
import Navbar from "./Components/Header";
import Home from "./Components/Home";
import { NavbarProvider } from "./NavBarContext";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

function App() {
  return (
    <NavbarProvider>
      <div>
        <Navbar />
        <Home />
        <About />
        {/* <Skills /> */}
        {/* <Contact /> */}
      </div>
    </NavbarProvider>
  );
}

export default App;
