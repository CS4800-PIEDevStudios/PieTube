import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Page1 = () => (
  <div>
    <h1>Page 1</h1>
    <p>This is Page 1.</p>
    <Link to="/">
        <Button variant="primary"> Home </Button>
    </Link>
  </div>
);

export default Page1;