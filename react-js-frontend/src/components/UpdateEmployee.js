import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import BASE_URL from "../service/restapi";

const UpdateEmployee = () => {

    const [employee, setEmployee] = useState({});

    const handleForm = (e) => {
        console.log(employee);
        updateDataOnServer(employee);
        e.preventDefault();
    };

    const updateDataOnServer = (data) => {
        axios.put(`${BASE_URL}/update`, data).then(
            (response) => {
                console.log(response);
                console.log("Success!");
                toast.success("Employee Updated Successfully", {
                    position: "top-center"
                });
            },
            (error) => {
                console.log(error);
                toast.error("Something went wrong", {
                    position: "top-center"
                });
            }
        );
    };

    useEffect(() => {
        document.title = "Update Employee";
    }, []);
    return (
        <Form className="my-4" onSubmit={handleForm}>
            <FormGroup>
                <Label for="employeeId">Employee ID</Label>
                <Input
                    type="number"
                    name="employeeId"
                    id="employeeId"
                    placeholder="Enter employee id here"
                    required
                    onChange={(e) => {
                        setEmployee({ ...employee, id: e.target.value })
                    }}
                />
            </FormGroup>
            <FormGroup>
                <Label for="name">Employee Name</Label>
                <Input
                    id="name"
                    name="name"
                    placeholder="Enter employee name here"
                    type="text"
                    required
                    onChange={(e) => {
                        setEmployee({ ...employee, name: e.target.value })
                    }}
                />
            </FormGroup>
            <FormGroup>
                <Label for="experience">Experience (In Years)</Label>
                <Input
                    id="experience"
                    name="experience"
                    placeholder="Enter experience here"
                    type="text"
                    required
                    onChange={(e) => {
                        setEmployee({ ...employee, experience: e.target.value })
                    }}
                />
            </FormGroup>
            <FormGroup>
                <Label for="companyName">Company Name</Label>
                <Input
                    id="companyName"
                    name="companyName"
                    placeholder="Enter company name here"
                    type="text"
                    required
                    onChange={(e) => {
                        setEmployee({ ...employee, companyName: e.target.value })
                    }}
                />
            </FormGroup>
            <FormGroup>
                <Label for="skills">Skills (Comma Separated)</Label>
                <Input
                    id="skills"
                    name="skills"
                    placeholder="Enter skills here"
                    type="textarea"
                    required
                    onChange={(e) => {
                        setEmployee({ ...employee, skills: e.target.value })
                    }}
                />
                <div className="my-3">
                    <Button type="submit" style={{ marginRight: 5 }} color="success">Update</Button>
                    <Button type="reset" onClick={() => { setEmployee({ id: "", name: "", experience: "", companyName: "", skills: "" }) }} style={{ marginLeft: 5 }} color="warning">Reset</Button>
                    <ToastContainer />
                </div>
            </FormGroup>
        </Form>
    );
};

export default UpdateEmployee;