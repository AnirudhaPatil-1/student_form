import React, { useContext } from "react";
import { AppContext } from "./context";
import { Button, Card, Col, DatePicker, Form, Input, InputNumber, Row, Select, Space } from 'antd';
import {ADD_STUDENT} from './reducer';

import { useNavigate } from "react-router-dom";
const { Option } = Select;

function StudentForm() {
    const [form] = Form.useForm();
    // const { setRegistrationData } = useContext(AppContext);
    // const {registrationData, setRegistrationData} = useContext(AppContext);
    const {dispatch} = useContext(AppContext);
    const navigate = useNavigate();

    const onFinish = (values) => {
        values.birthDate = new Date(values.birthDate).toISOString();
        // setRegistrationData(values);
        // setRegistrationData([...registrationData, values]   )

        //dispatch function to add object containing  student data 
        dispatch({type: ADD_STUDENT, payload: values});
        // console.log(values);
        navigate('/student-table');
    };

    const onReset = () => {
        form.resetFields();
    };

    return (
        <div  >
            <Card  style={{maxWidth: 600, margin: "auto", marginTop: "5vh",backgroundColor: "#FCFBFC	" ,boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }} bordered={true}>
                <h1>Student Registration Form</h1>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                >
                    <Row gutter={16}>
                        <Col lg={12} md={24} sm={24} xs={24} >
                            <Form.Item
                                name="firstName"
                                label="First Name"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input maxLength={50} style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                        <Col lg={12} md={24} sm={24} xs={24}  >
                            <Form.Item
                                name="lastName"
                                label="Last Name"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input maxLength={50} style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16} >
                        <Col lg={12} md={24} sm={24} xs={24}>
                            <Form.Item
                                name="birthDate"
                                label="Birth Date"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <DatePicker style={{ width: "100%" }} />
                            </Form.Item>
                        </Col>
                        <Col lg={12} md={24} sm={24} xs={24} >
                            <Form.Item
                                name="emailAddress"
                                label="Email Address"
                                rules={[
                                    {
                                        required: true,
                                        type: "email"
                                    },
                                ]}
                            >
                                <Input maxLength={100} style={{ width: '100%' }} />
                            </Form.Item>

                        </Col>

                    </Row>

                    <Row gutter={16} >
                        <Col lg={12} md={24} sm={24} xs={24}>
                            <Form.Item
                                name="mobile"
                                label="Mobile"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <InputNumber maxLength={10} style={{ width: "100%" }} />
                            </Form.Item>
                        </Col>
                        <Col lg={12} md={24} sm={24} xs={24}>
                            <Form.Item
                                name="gender"
                                label="Gender"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Select
                                    placeholder="Select a option"
                                    allowClear
                                    style={{ width: '100%' }}
                                >
                                    <Option value="male">Male</Option>
                                    <Option value="female">Female</Option>
                                    <Option value="other">Other</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>



                    <Row gutter={16}>
                        <Col lg={12} md={24} sm={24} xs={24}>
                            <Form.Item
                                name="graduationStatus"
                                label="Graduation Status"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please select a graduation status',
                                    },
                                ]}
                            >
                                <Select
                                    placeholder="Select graduation status"
                                    allowClear
                                    style={{ width: '100%' }}
                                >
                                    <Option value="Completed">Completed</Option>
                                    <Option value="In Progress">In Progress</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col lg={12} md={24} sm={24} xs={24}>
                            <Form.Item
                                name="engineeringDomain"
                                label="Engineering Domain"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please select an engineering domain',
                                    },
                                ]}
                            >
                                <Select
                                    placeholder="Select an engineering domain"
                                    allowClear
                                    style={{ width: '100%' }}
                                >
                                    <Option value="Mechanical">Mechanical Engineering</Option>
                                    <Option value="Civil">Civil Engineering</Option>
                                    <Option value="Electrical">Electrical Engineering</Option>
                                    <Option value="Computer">Computer Engineering</Option>
                                    <Option value="Software">Software Engineering</Option>
                                    <Option value="Chemical">Chemical Engineering</Option>
                                    <Option value="Aerospace">Aerospace Engineering</Option>
                                    <Option value="Biomedical">Biomedical Engineering</Option>
                                    <Option value="Environmental">Environmental Engineering</Option>
                                    <Option value="Industrial">Industrial Engineering</Option>
                                    <Option value="Materials">Materials Engineering</Option>
                                    <Option value="Petroleum">Petroleum Engineering</Option>
                                    <Option value="Nuclear">Nuclear Engineering</Option>
                                    <Option value="Systems">Systems Engineering</Option>
                                    <Option value="Automotive">Automotive Engineering</Option>
                                    <Option value="Telecommunications">Telecommunications Engineering</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item
                        name="address"
                        label="Address"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input.TextArea maxLength={300} style={{ width: '100%' }} />
                    </Form.Item>


                    <Row gutter={16}>
                        <Col lg={12} md={24} sm={24} xs={24} >
                            <Form.Item
                                name="city"
                                label="City"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input maxLength={50} style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                        <Col lg={12} md={24} sm={24} xs={24}>
                            <Form.Item
                                name="state"
                                label="State"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please select a state',
                                    },
                                ]}
                            >
                                <Select
                                    placeholder="Select a state"
                                    allowClear
                                    style={{ width: '100%' }}
                                >
                                    <Option value="Andhra Pradesh">Andhra Pradesh</Option>
                                    <Option value="Arunachal Pradesh">Arunachal Pradesh</Option>
                                    <Option value="Assam">Assam</Option>
                                    <Option value="Bihar">Bihar</Option>
                                    <Option value="Chhattisgarh">Chhattisgarh</Option>
                                    <Option value="Goa">Goa</Option>
                                    <Option value="Gujarat">Gujarat</Option>
                                    <Option value="Haryana">Haryana</Option>
                                    <Option value="Himachal Pradesh">Himachal Pradesh</Option>
                                    <Option value="Jharkhand">Jharkhand</Option>
                                    <Option value="Karnataka">Karnataka</Option>
                                    <Option value="Kerala">Kerala</Option>
                                    <Option value="Madhya Pradesh">Madhya Pradesh</Option>
                                    <Option value="Maharashtra">Maharashtra</Option>
                                    <Option value="Manipur">Manipur</Option>
                                    <Option value="Meghalaya">Meghalaya</Option>
                                    <Option value="Mizoram">Mizoram</Option>
                                    <Option value="Nagaland">Nagaland</Option>
                                    <Option value="Odisha">Odisha</Option>
                                    <Option value="Punjab">Punjab</Option>
                                    <Option value="Rajasthan">Rajasthan</Option>
                                    <Option value="Sikkim">Sikkim</Option>
                                    <Option value="Tamil Nadu">Tamil Nadu</Option>
                                    <Option value="Telangana">Telangana</Option>
                                    <Option value="Tripura">Tripura</Option>
                                    <Option value="Uttar Pradesh">Uttar Pradesh</Option>
                                    <Option value="Uttarakhand">Uttarakhand</Option>
                                    <Option value="West Bengal">West Bengal</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item>
                        <Space>
                            <Button type="primary" htmlType="submit">
                                Save
                            </Button>
                            <Button htmlType="button" onClick={onReset}>
                                Reset
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Card>
        </div>


    );
}

export default StudentForm;


