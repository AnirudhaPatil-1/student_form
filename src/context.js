import React, {useReducer} from "react";
import { createContext, useContext} from "react";
import reducer from './reducer';
// import {Link, useNavigate} from 'react-router-dom';



const AppContext = createContext();

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  dateOfBirth: '',
  gender: '',
  mobileNo: '',
  address: '',
  course: '',
  city: '',
  state: '',
};

const AppProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(reducer, initialState)

  const changeFirstName = (changedFirstName) => {
    dispatch({type: 'CHANGE_FIRST_NAME', payload: changedFirstName});
  }

  const changeLastName = (changedLastName) => {
    dispatch({type: 'CHANGE_LAST_NAME', payload: changedLastName});
  }

  const setEmail = (changedEmail) => {
    dispatch({type: 'CHANGE_EMAIL', payload: changedEmail})
  }
  const changeDateOfBirth = (changedBOD) => {
    dispatch({type: 'CHANGE_BOD', payload: changedBOD})
  }
  const changeGender = (changedGender) => {
    dispatch({type: 'CHANGE_GENDER', payload: changedGender})
  }
  const changePhoneNumber = (changedPhone) => {
    dispatch({type: 'CHANGE_PHONE', payload: changedPhone})
  }
  const changeAddress = (changedAddress) => {
    dispatch({type: 'CHANGE_ADDRESS', payload: changedAddress})
  }
  const changeCourse = (changedCourse) => {
    dispatch({type: 'CHANGE_COURSE', payload: changedCourse})
  }
  const changeCity = (changedCity) => {
    dispatch({type: 'CHANGE_CITY', payload: changedCity})
  }
  const changeState = (changedState) => {
    dispatch({type: 'CHANGE_STATE', payload: changedState})
  }




  return (
    
    <AppContext.Provider
      value={{...state, changeFirstName, changeLastName, setEmail, changeDateOfBirth, changeGender, changePhoneNumber, changeAddress, changeCourse, changeCity, changeState}}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
