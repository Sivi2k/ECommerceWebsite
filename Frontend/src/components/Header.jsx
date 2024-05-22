import logo from '../logo.svg';
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "react-bootstrap";
import "react-icons/fa";// FaShoppingCart, FaUser
import { FaShoppingCart } from "react-icons/fa";
import {LinkContainer} from 'react-router-bootstrap';
const header = () => {
    return (
        <header>
            <Navbar  className='bg-dark '  expand="md" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                    <Navbar.Brand href="/" className='text-white'>
                        <img src={logo} alt="logo" width="50px"/>
                        My e-Commerce Website
                    </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <LinkContainer to="/cart">
                            <Nav.Link href="/cart" className='text-white'>
                            <FaShoppingCart />
                            Cart
                            </Nav.Link>
                            </LinkContainer>

                             <LinkContainer to="/login">
                            <Nav.Link href="/login" className='text-white'>
                            <FaShoppingCart />
                            SignIn
                        </Nav.Link>
                        </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </header>
    );
}

export default header;