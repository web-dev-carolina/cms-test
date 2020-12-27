import React, { useState, useEffect }  from 'react';
import "bootstrap/dist/js/bootstrap.min.js";
import Axios from "axios";
import { Container, Row, Col } from 'react-bootstrap';
import "../styles/Testimonials.css";
import TestimonialContainer from '../components/TestimonialContainer';
const Testimonials = () => {

    // use react 'useState' to store testimonial data
    const [testimonials, setTestimonials] = useState([]);

    // useEffect is a react hook that allows us to make an async Axios request
    useEffect(() => {

        // to await Axios, we must wrap the call in a function (React is weird)
        async function fetchData() {
            const result = await Axios.get("http://localhost:9000/testimonials");
            const data = result.data;
            setTestimonials(data);
        }
        fetchData(); // immediately call the fn to request data 
    }, []);

    return (
        // here we pass in our testimonial data as a prop to TestimonialContainer
        <Container>
            <h1>Testimonials</h1>
            <TestimonialContainer testimonials={testimonials}/>
        </Container>
    )
}


export default Testimonials;
