import React, { useState } from "react";
import  { useReducer } from "react";
import { createContext } from "react";
import { registrationDataReducer } from "./reducer";


//SINGLE STUDENT REGISTRATION FORMAT:
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

//MULTIPLE_ STUDENT REGISTRATION FORMAT
const initialState = [];


const AppContext = createContext();

const AppProvider = ({ children }) => {
  
  //USESTATE
  // const [registrationData, setRegistrationData] = useState(initialState);
  
  //USEREDUCER
  const [registrationData, dispatch] = useReducer(registrationDataReducer, initialState);
  // console.log(registrationData);

  return (

    <AppContext.Provider
    //USING USESTATE +  CONTEXT
      // value={{ registrationData, setRegistrationData }}

      //USING REDUCER + CONTEXT
      value={{ registrationData, dispatch }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
