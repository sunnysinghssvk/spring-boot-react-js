import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import BASE_URL from "../service/restapi";

const DeleteEmployee = () => {

    const [id, setId] = useState('');

    const handleForm = (e) => {
        e.preventDefault();
        console.log(e);
        axios.delete(`${BASE_URL}/deleteById/${id}`).then(
            (response) => {
                console.log(response);
                console.log("Success!");
                toast.success("Deleted Successfully", {
                    position: "top-center"
                });
            },
            (error) => {
                console.log(error);
                toast.error("ID does not exist", {
                    position: "top-center"
                });
            }
        );
    };

    useEffect(() => {
        document.title = "Delete Employee";
    }, []);

    return (
        <Form className="my-5" onSubmit={handleForm}>
            <FormGroup>
                <Label for="id">Employee ID</Label>
                <Input
                    type="number"
                    name="id"
                    id="id"
                    required
                    placeholder="Enter Employee ID here"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
            </FormGroup>
            <div className="my-3">
                <Button type="submit" style={{ marginRight: 5 }} color="danger">Delete</Button>
                <Button type="reset" onClick={()=> {setId("")}} style={{ marginLeft: 5 }} color="warning">Reset</Button>
                <ToastContainer />
            </div>
        </Form>
    );
};

export default DeleteEmployee;