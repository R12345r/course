// App.js
import React from 'react';
import CourseList from './Courselist';
import './App.css';

function App() {
  return (
    <div>
      <header className="navbar">
        <div className="container">
          <span className="brand">Course Listing App</span>
        </div>
      </header>
      <div className="container">
        <CourseList />
      </div>
    </div>
  );
}

export default App;
