import React, { createContext, useContext, useState, useEffect } from "react";


const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [userName, setUserName] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token"); 
    if (token) {
      setIsLoggedIn(true); 
      const storedUserName = localStorage.getItem("userName");
      setUserName(storedUserName); 
    } else {
      setIsLoggedIn(false); 
    }
  }, []);

  
  const login = (token, userName) => {
    localStorage.setItem("token", token); 
    localStorage.setItem("userName", userName); 
    setUserName(userName); 
    setIsLoggedIn(true); 
  };

  
  const logout = () => {
    localStorage.removeItem("token"); 
    localStorage.removeItem("userName"); 
    setUserName(null); 
    setIsLoggedIn(false); 
  };

  return (
    <AuthContext.Provider value={{ userName, isLoggedIn, setUserName, setIsLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  return useContext(AuthContext);
};
