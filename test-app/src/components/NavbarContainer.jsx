import React, { useContext } from 'react';
import { Navbar, Nav, Button, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Testimonials from '../pages/Testimonials.jsx';

// import { useHistory } from "react-router-dom";
// import UserContext from "../context/UserContext.js";

const NavbarContainer = () => {

    // const history = useHistory();
    // const signup = () => history.push("/signup");
    // const login = () => history.push("/login");
    // const logout = () => {
    //     setUserData({
    //         token: undefined,
    //         user: undefined
    //     })
    //     localStorage.clear();
    // };

    return (
        <>
            <Navbar sticky="top" bg="light" variant="light" className="navbar">
                <Navbar.Brand className="mr-auto logo-nav"> Web Dev Carolina Headless CMS test site </Navbar.Brand>
                <Nav className="mx-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/testimonials">Testimonials</Nav.Link>
                    {/* <Nav.Link as={Link} to="/schedule">Scheduler</Nav.Link>
                    <Nav.Link as={Link} to="/catalog">Catalog</Nav.Link>
                    <Nav.Link as={Link} to="/weather">Weather</Nav.Link>
                    <Nav.Link as={Link} to="/profile">Profile</Nav.Link> */}
                </Nav>
                {/* { userData.user ? (
                    <Button as={Link} onClick={logout} to="/" variant="dark" className="ml-auto">Log Out</Button>
                ) : (
                    <>
                    <Button as={Link} onClick={login} to="/login" variant="dark" className="ml-auto">Login</Button>
                    <Button as={Link} onClick={signup} to="/signup" variant="secondary" disabled>Sign Up</Button>
                    </>
                )} */}

            </Navbar>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/testimonials" component={Testimonials} />
                {/* <Route exact path="/schedule" component={Schedule} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/weather" component={Weather} />
                <Route exact path="/catalog" component={Catalog} />
                <Route exact path="/profile" component={Profile} /> */}
            </Switch>
        </>
    )
}

export default NavbarContainer;