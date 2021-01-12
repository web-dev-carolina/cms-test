import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { Container, Row, Col } from 'react-bootstrap';
import "../styles/People.css";
import PeopleContainer from '../components/PeopleContainer.jsx';

const People = () => {
    // use react 'useState' to store testimonial data
    const [people, setPeople] = useState([]);

    // useEffect is a react hook that allows us to make an async Axios request
    useEffect(() => {

        // to await Axios, we must wrap the call in a function (useEffect itself cannot be asynchronous)
        async function fetchData() {
            const result = await Axios.get("http://localhost:9000/people");
            const data = result.data;
            setPeople(data);
        }
        fetchData(); // immediately call the fn to request data 
    }, []);

    return (
        // here we pass in our testimonial data as a prop to TestimonialContainer
        <Container>
            <h1>People</h1>
            <PeopleContainer people={people} />
        </Container>
    )
}


export default People;
