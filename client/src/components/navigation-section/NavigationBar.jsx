import React, { useState } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from 'reactstrap';

function NavigationBar(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
        <Navbar>
            <NavbarBrand href="/">Mockingjay Chat App</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
                <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                    GitHub
                </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Rooms
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>Room 1</DropdownItem>
                    <DropdownItem>Room 2</DropdownItem>
                </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
            {/* <NavbarText>Simple Text</NavbarText> */}
            </Collapse>
        </Navbar>
        </>
    );
}

export default NavigationBar;
