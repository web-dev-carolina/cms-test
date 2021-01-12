import React from 'react';
import { Card } from "react-bootstrap";

const Testimonial = (props) => {
    return (
        // Here we use a bootstrap card to display our testimonial data, passed in by props
        <>
            <Card className="mx-auto mb-3" style={{ width: '70vw' }}>
                <Card.Body>
                    <Card.Title>{props.testimonial.text}</Card.Title>
                    <Card.Text>
                        - {props.testimonial.author}
                    </Card.Text>
                    <Card.Subtitle className="text-muted">{props.testimonial._id}</Card.Subtitle>
                </Card.Body>
            </Card>
        </>
    )
}

export default Testimonial;
