import React, { useContext, useEffect } from 'react';
import { Card, Descriptions } from 'antd';
import { AppContext } from './context';

import './App.css'

// const formData = {
//     address: "Devkar hospital, Karvenagar",
//     birthDate: "2023-09-04T18:45:12.727Z",
//     city: "Pune",
//     emailAddress: "anirudha.patil.dew@gmail.com",
//     engineeringDomain: "Civil",
//     firstName: "anirudha",
//     gender: "female",
//     graduationStatus: "In Progress",
//     lastName: "patil",
//     mobile: 7350364300,
//     state: "Gujarat",
//   };

function BasicTable() {
    // const { registrationData } = useContext(AppContext);
    const { firstName, lastName, birthDate, emailAddress, mobile, gender, graduationStatus, engineeringDomain, city, state, address   } = useContext(AppContext);
    

    useEffect(() => {
        // console.log('registrationData', registrationData);
    }, [firstName]);

    const items = [
        {
            key: '1',
            label: 'First Name',
            children: firstName,
        },
        {
            key: '2',
            label: 'Last Name',
            children: lastName,
        },
        {
            key: '3',
            label: 'Birth Date',
            children: birthDate ? birthDate.slice(0, birthDate.indexOf('T')) : '',
        },
        {
            key: '4',
            label: 'Email Address',
            children: emailAddress,
        },
        {
            key: '5',
            label: 'Mobile',
            children: mobile,
        },
        {
            key: '6',
            label: 'Gender',
            children: gender,
        },
        {
            key: '7',
            label: 'Graduation Status',
            children: graduationStatus,
        },
        {
            key: '8',
            label: 'Engineering Domain',
            children: engineeringDomain,
        },

        {
            key: '9',
            label: 'Address',
            children: address,
        },
        {
            key: '10',
            label: 'City',
            children: city,
        },
        {
            key: '11',
            label: 'State',
            children: state,
        }
    ];

    return (
        <div >
            <Card style={{ margin: "auto", marginTop: "5vh", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"}}>
            <h1> Student Info</h1>
            {/* <Descriptions title="Student Info" items={items} style={{ fontWeight: "bold" }} bordered/> */}
            <Descriptions  items={items} style={{ fontWeight: "bold" }} bordered/>
        </Card>
        </div>
    )
}

export default BasicTable;


