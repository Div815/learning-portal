import React from 'react';
import { useParams, Link } from 'react-router-dom';

const CoursePage = () => {
    const { courseId } = useParams(); // Gets the 'courseId' from the URL

    // In a real app, you would fetch course data based on the courseId
    const courseTitle = courseId.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());

    return (
        <div className="course-page-container">
            <h1>Welcome to {courseTitle}</h1>
            <p>This is where the detailed content for the <strong>{courseId}</strong> course will be displayed.</p>
            <Link to="/home">← Back to Home</Link>
        </div>
    );
};

export default CoursePage;