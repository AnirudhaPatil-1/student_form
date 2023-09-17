import React, { useState } from "react";
import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [registrationData, setRegistrationData] = useState({});

  return (

    <AppContext.Provider
      value={{ ...registrationData, setRegistrationData }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
