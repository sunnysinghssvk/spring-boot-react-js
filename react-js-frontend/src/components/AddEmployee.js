import React, { useEffect, useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import BASE_URL from "../service/restapi";

const AddEmployee = () => {
    
    const [employee, setEmployee] = useState({});

    const handleForm = (e) => {
        console.log(employee);
        sendDataToPostAPI(employee);
        e.preventDefault();
    };

    const sendDataToPostAPI = (data) => {
        axios.post(`${BASE_URL}/create`, data).then(
            (response) => {
                console.log(response);
                console.log("Success!");
                toast.success("Saved Successfully", {
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
        document.title = "Add Employee";
    }, []);

    return (
        <Form className="my-5" onSubmit={handleForm}>
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
                    <Button type="submit" style={{ marginRight: 5 }} color="success">Submit</Button>
                    <Button type="reset" onClick={() => { setEmployee({ name: "", experience: "", companyName: "", skills: "" }) }} style={{ marginLeft: 5 }} color="warning">Reset</Button>
                    <ToastContainer />
                </div>
            </FormGroup>
        </Form>
    );
};

export default AddEmployee;