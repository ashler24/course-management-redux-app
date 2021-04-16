import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const HomePage = () => (
    <div className="container-sm">
        <p>React, Redux and Router</p>
        <Link to="about">
            <Button variant="primary">
                Learn More
            </Button>
        </Link>
    </div>
);


export default HomePage;


