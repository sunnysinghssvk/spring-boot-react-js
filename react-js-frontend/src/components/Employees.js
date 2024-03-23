import React, { useEffect, useState } from "react";
import { Table, Container, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import BASE_URL from "../service/restapi";
import axios from "axios";

const Employees = () => {

    const [employees, setEmployees] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);

    const getAllEmployeesFromRestApi = () => {
        axios.get(`${BASE_URL}/getAllDeveloper`, {
            params: {
                pageNumber: (pageNumber > 0) ? pageNumber : 0,
                pageSize: 8
            }
        }).then(
            (response) => {
                console.log(response);
                setEmployees(response.data);
            },
            (error) => {
                console.log(error);
                toast.error("Something went wrong!", {
                    position: "top-center"
                });
            }
        );
    };

    useEffect(() => {
        document.title = "Employee Details";
        getAllEmployeesFromRestApi();
        toast.success("Employees has been loaded", {
            position: "top-center"
        });
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <Table hover className="my-5">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Full Name</th>
                        <th>Experience (In Yrs)</th>
                        <th>Company Name</th>
                        <th>Skills</th>
                    </tr>
                </thead>
                <tbody>
                    {employees && employees.map((employee) => (
                        <tr>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.experience}</td>
                            <td>{employee.companyName}</td>
                            <td>{employee.skills}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Container>
                <Pagination>
                    <PaginationItem>
                        <PaginationLink onClick={() => {
                            setPageNumber(pageNumber - 1);
                            getAllEmployeesFromRestApi();
                        }}>Previous</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={() => {
                            setPageNumber(pageNumber + 1);
                            getAllEmployeesFromRestApi();
                        }}>Next</PaginationLink>
                    </PaginationItem>
                </Pagination>
            </Container>
            <ToastContainer />
        </div>
    );
};

export default Employees;