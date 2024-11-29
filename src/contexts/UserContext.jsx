import React, { createContext, useState, useContext } from "react";

// Create a context
const UserContext = createContext();

// Custom hook to use the user context
export const useUser = () => {
  return useContext(UserContext);
};

// Provider component
export const UserProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  // Function to log in
  const login = (role) => {
    setIsAuthenticated(true);
    setUserRole(role);
  };

  // Function to log out
  const logout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
  };

  return (
    <UserContext.Provider value={{ isAuthenticated, userRole, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
