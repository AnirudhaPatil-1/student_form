import React, { useContext } from 'react';

import { AppContext } from './context';


import { Table, Button, Card } from 'antd';
import { useNavigate } from 'react-router-dom';

const StudentTable = () => {

    const navigate = useNavigate();

    const { registrationData } = useContext(AppContext);

    

    const columns = [
        {
            title: "First Name",
            dataIndex: "firstName",
            key: "firstName",
        },
        {
            title: "Last Name",
            dataIndex: "lastName",
            key: "lastName",
        },
        {
            title: "Birth Date",
            dataIndex: "birthDate",
            key: "birthDate",
            render: (text) => text.slice(0, 10),
        },
        {
            title: "Email Address",
            dataIndex: "emailAddress",
            key: "emailAddress",
        },
        {
            title: "Mobile",
            dataIndex: "mobile",
            key: "mobile",
        },
        {
            title: "Gender",
            dataIndex: "gender",
            key: "gender",
        },
        {
            title: "Graduation Status",
            dataIndex: "graduationStatus",
            key: "graduationStatus",
        },
        {
            title: "Engineering Domain",
            dataIndex: "engineeringDomain",
            key: "engineeringDomain",
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address",
        },
        {
            title: "City",
            dataIndex: "city",
            key: "city",
        },
        {
            title: "State",
            dataIndex: "state",
            key: "state",
        },
    ];

    const data = registrationData.map((student, index) => ({

        key: index,
        firstName: student.firstName,
        lastName: student.lastName,
        // children: birthDate ? birthDate.slice(0, birthDate.indexOf('T')) : '',
        birthDate: student.birthDate,
        emailAddress: student.emailAddress,
        mobile: student.mobile,
        gender: student.gender,
        graduationStatus: student.graduationStatus,
        engineeringDomain: student.engineeringDomain,
        address: student.address,
        city: student.city,
        state: student.state,
    }))

    const navigateToStudentForm = () => {
        navigate('/');
    }

    return (
        <Card>
            <Table bordered columns={columns} dataSource={data} />

            <Button type="primary" htmlType="button" onClick={navigateToStudentForm}>
                Back to Student Form
            </Button>
            </Card>
    )

}

export default StudentTable




