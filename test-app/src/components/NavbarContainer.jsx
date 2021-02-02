import React, { useContext } from 'react';
import { Navbar, Nav, Button, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Testimonials from '../pages/Testimonials.jsx';
import People from '../pages/People.jsx';

const NavbarContainer = () => {

    return (
        <>
            <Navbar sticky="top" bg="light" variant="light" className="navbar">
                <Navbar.Brand className="mr-auto logo-nav"> Web Dev Carolina Headless CMS test site </Navbar.Brand>
                <Nav className="mx-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/testimonials">Testimonials</Nav.Link>
                    <Nav.Link as={Link} to="/people">People</Nav.Link>
                </Nav>
            </Navbar>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/testimonials" component={Testimonials} />
                <Route exact path="/people" component={People} />
            </Switch>
        </>
    )
}

export default NavbarContainer;