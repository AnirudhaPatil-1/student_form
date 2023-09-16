import React from "react";
import { TextField, Button, Stack } from "@mui/material";
import { useGlobalContext } from "./context";
// import {Link, useNavigate} from 'react-router-dom';







// import {Link} from 'react-router-dom';



function StudentForm() {
  const {
    firstName,
    lastName,
    email,
    dateOfBirth,
    gender,
    mobileNo,
    address,
    course,
    city,
    state,
    changeFirstName,
    changeLastName,
    setEmail,
    changeDateOfBirth,
    changeGender,
    changePhoneNumber,
    changeAddress,
    changeCourse,
    changeCity,
    changeState,
    
  } = useGlobalContext();

  // const navigate = useNavigate();



  return (
    <div className="card-container">
      <h1>Student Registration Form</h1>
      
      <form >
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <TextField
            type="text"
            variant="outlined"
            color="primary"
            label="First Name"
            onChange={(e) => changeFirstName(e.target.value)}
            value={firstName}
            fullWidth
            required
          />
          <TextField
            type="text"
            variant="outlined"
            color="primary"
            label="Last Name"
            onChange={(e) => changeLastName(e.target.value)}
            value={lastName}
            fullWidth
            required
          />
        </Stack>
        <TextField
          type="email"
          variant="outlined"
          color="primary"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <TextField
          type="date"
          variant="outlined"
          color="primary"
          label="Date of Birth"
          onChange={(e) => changeDateOfBirth(e.target.value)}
          value={dateOfBirth}
          required
          fullWidth
          sx={{ mb: 4 }}
        // InputLabelProps={{ style: { transform: 'none' } }}
        />
        <TextField
          type="text"
          variant="outlined"
          color="primary"
          label="Gender"
          onChange={(e) => changeGender(e.target.value)}
          value={gender}
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <TextField
          type="number"
          variant="outlined"
          color="primary"
          label="Phone Number"
          onChange={(e) => changePhoneNumber(e.target.value)}
          value={mobileNo}
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <TextField
          type="text"
          variant="outlined"
          color="primary"
          label="Address"
          onChange={(e) => changeAddress(e.target.value)}
          value={address}
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <TextField
          type="text"
          variant="outlined"
          color="primary"
          label="Course"
          onChange={(e) => changeCourse(e.target.value)}
          value={course}
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <TextField
          type="text"
          variant="outlined"
          color="primary"
          label="City"
          onChange={(e) => changeCity(e.target.value)}
          value={city}
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <TextField
          type="text"
          variant="outlined"
          color="primary"
          label="State"
          onChange={(e) => changeState(e.target.value)}
          value={state}
          fullWidth
          required
          sx={{ mb: 4 }}
        />

        
<Button variant="contained" color="primary" type="button">
          Register
        </Button>
        
      </form>
    </div>

  );
}

export default StudentForm;
