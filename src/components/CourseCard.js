import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ id, title, description }) => {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate(`/course/${id}`);
    };

    return (
        <div className="course-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <button onClick={handleStart}>Start</button>
        </div>
    );
};

export default CourseCard;