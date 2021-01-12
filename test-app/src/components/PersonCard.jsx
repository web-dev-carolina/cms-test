import React from 'react';
import { Card } from "react-bootstrap";

const PersonCard = (props) => {
    return (
        // Here we use a bootstrap card to display our testimonial data, passed in by props
        <>
            <Card className="mx-auto mb-3" style={{ width: '50vw' }}>
                <Card.Body>
                    <Card.Title>{props.person.fname + " " + props.person.lname} </Card.Title>
                    <Card.Subtitle className="text-muted mb-2">{props.person.pos}</Card.Subtitle>
                    <Card.Text>
                        {props.person.bio}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default PersonCard;
