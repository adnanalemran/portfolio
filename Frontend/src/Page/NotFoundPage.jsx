import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
    <div className="text-center">
      <h1 className="display-3">404</h1>
      <h2 className="display-4">Page Not Found</h2>
      <p className="lead">Sorry, the page you are looking for could not be found.</p>
      <Link to="/" className="btn btn-light">Go to Home</Link>
    </div>
  </div>
);

export default NotFoundPage;
