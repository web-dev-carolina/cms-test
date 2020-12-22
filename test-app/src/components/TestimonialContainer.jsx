import React from 'react';
import Testimonial from '../components/Testimonial';

const TestimonialContainer = (props) => {
    // Here we recieve all the testimonial data from props

    return (
        <>
        <div className="centering">
            {   // Since testimonials is a JSON array, we can use the map function to assign each object to a Testimonial component
                props.testimonials.map(testimonial => <Testimonial testimonial={testimonial}/>) 
                // make sure you pass in the JSON object (in this case testimonial) as a prop to the next component
            }
        </div>
        </>
    )
}

export default TestimonialContainer;