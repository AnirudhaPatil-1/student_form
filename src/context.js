import React, { useState } from "react";
import { createContext } from "react";

// const initialState = {
//   firstName: "",
//   lastName: "",
//   birthDate: null,
//   emailAddress: "",
//   mobile: null,
//   gender: "",
//   graduationStatus: "",
//   engineeringDomain: "",
//   address: "",
//   city: "",
//   state: "",
// };
const initialState = [];


const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [registrationData, setRegistrationData] = useState(initialState);
  console.log(registrationData);

  return (

    <AppContext.Provider
      value={{ registrationData, setRegistrationData }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
