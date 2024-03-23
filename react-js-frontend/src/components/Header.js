import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

function Header(props) {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
        <div>
            <Navbar className="my-2" color="secondary" dark>
                <NavbarBrand href="/" className="me-auto">
                    Employee Management Application
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="me-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/all-employees">All Employees</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/add-employee">Add New Employee</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/update-employee">Update Employee</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/delete-employee">Delete Employee</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;