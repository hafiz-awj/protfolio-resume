import React from 'react'
import "./App.css";
import Navbar from "./Components/Header";
import Home from "./Components/Home";
import { NavbarProvider } from "./NavBarContext";

function App() {
  return (
    <NavbarProvider>
      <div>
        <Navbar />
        <Home />
      </div>
    </NavbarProvider>
  );
}

export default App;
