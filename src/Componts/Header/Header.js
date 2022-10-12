import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './Header.css'

const Header = () => {
    return (
        <div >

            <Navbar expand="lg">
                <Container>
                    <Link className='logo' to={'/topice'}>Secret</Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                        </Nav>
                        <div className="d-flex menu">
                            <NavLink className={({isactive})=> isactive ? 'active': undefined} to='/topice'>Home</NavLink>
                            <NavLink to='/satistics'>Statistics</NavLink>
                            <NavLink to='/blog'>Blog</NavLink>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>





        </div>
    );
};

export default Header;