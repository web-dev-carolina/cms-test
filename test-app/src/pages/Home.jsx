import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
    const[text, setText] = useState([]);

    // useEffect is a react hook that allows us to make an async Axios request
    useEffect(() => {

        // to await Axios, we must wrap the call in a function (React is weird)
        async function fetchData() {
            const result = await Axios.get("http://localhost:5000/cms-readonly/us-central1/app/textContent");
            const data = result.data;
            setText(data);
        }
        fetchData(); // immediately call the fn to request data 
    }, []);

    return (
        <Container>
            <h1>Home</h1>
            <h2>About</h2>
            {text.filter(t => t.section == "About").map(t => <p>{t.content}</p>)}
        </Container>
    )
}


export default Home;
