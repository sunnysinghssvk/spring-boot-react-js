import React from 'react';
import { Button, Card, CardText, CardBody, CardTitle, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';

const Features = () => {
    return (
        <div className='d-flex flex-row'>
            <div className='mx-auto'>
                <Card className='my-4' style={{ width: '25rem', height: '30rem' }}>
                    <CardImg className='my-2' alt="Add Employee" src="/add.png" style={{height: 320}} top width="90%"/>
                    <CardBody>
                        <CardTitle tag="h5">Add Employee</CardTitle>
                        <CardText>Add a new employee</CardText>
                        <Button color='success' ><Link to='/add-employee' style={{ textDecoration: 'none', color: 'white' }}>Add</Link></Button>
                    </CardBody>
                </Card>
            </div>
            <div className='mx-auto'>
                <Card className='my-4' style={{ width: '25rem', height: '30rem' }}>
                    <CardImg alt="View Employee" src="/view.avif" style={{height: 340}} top width="90%"/>
                    <CardBody>
                        <CardTitle tag="h5">All Employees</CardTitle>
                        <CardText>Get details of all employees</CardText>
                        <Button color="secondary" ><Link to='/all-employees' style={{ textDecoration: 'none', color: 'white' }}>View</Link></Button>
                    </CardBody>
                </Card>
            </div>
            <div className='mx-auto'>
                <Card className='my-4' style={{ width: '25rem', height: '30rem' }}>
                    <CardImg alt="Delete Employee" src="/delete.jpg" style={{height: 335}} top width="90%"/>
                    <CardBody>
                        <CardTitle tag="h5">Delete Employee</CardTitle>
                        <CardText>Delete an existing employee</CardText>
                        <Button color="danger" ><Link to='/delete-employee' style={{ textDecoration: 'none', color: 'white' }}>Delete</Link></Button>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default Features;