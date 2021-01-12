import React from 'react';
import PersonCard from '../components/PersonCard.jsx';
import { Container } from 'react-bootstrap';

const PeopleContainer = (props) => {
    // Here we recieve all the testimonial data from props

    return (
        <Container className="centering">
            {   // Since testimonials is a JSON array, we can use the map function to assign each object to a Testimonial component
                props.people.map(person => <PersonCard person={person} />
                    // make sure you pass in the JSON object (in this case testimonial) as a prop to the next component
                )}
        </Container>
    )
}

export default PeopleContainer;