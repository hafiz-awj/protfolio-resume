// NavbarContext.js
import React, { createContext, useContext, useState } from 'react';

const NavbarContext = createContext();

export const useNavbarContext = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error('useNavbarContext must be used within a NavbarProvider');
  }
  return context;
};

export const NavbarProvider = ({ children }) => {
  const [isMobileNavbar, setIsMobileNavbar] = useState(false);

  const toggleMobileNavbar = () => {
    setIsMobileNavbar((prevValue) => !prevValue);
  };

  return (
    <NavbarContext.Provider value={{ isMobileNavbar, toggleMobileNavbar }}>
      {children}
    </NavbarContext.Provider>
  );
};
