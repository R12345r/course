// Course.js
import React from 'react';
import './Course.css';

const Course = ({ title, image, price }) => {
  return (
    <div className="card">
   <img className="card-img-top" src={process.env.PUBLIC_URL + '/' + image} alt={title} style={{ width: 140 }} />

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{price}</p>
        <button className="enroll-button">Enroll</button>
      </div>
    </div>
  );
};

export default Course;
