// CourseList.js
import React from 'react';
import Course from './Course';

const coursesData = [
  {
    id: 1,
    title: 'Web Development 101',
    image: 'webdevelopment.png',
    price: 'Rs 5000',
  },
  {
    id: 2,
    title: 'React Masterclass',
    image: 'react.png',
    price: 'Rs 8000',
  },
  {
    id: 3,
    title: 'JavaScript Fundamentals',
    image: 'javascript.png',
    price: 'Rs 4000',
  },
];

const CourseList = () => {
    return (
      <div className="course-list">
        {coursesData.map(course => (
          <div key={course.id} className="course">
            <Course title={course.title} image={course.image} price={course.price} />
          </div>
        ))}
      </div>
    );
  };
  

export default CourseList;
