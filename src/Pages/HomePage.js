import React from 'react';
import CourseCard from '../components/CourseCard';

const courses = [
    { id: 'frontend', title: 'Front-end Development', description: 'Master the art of creating beautiful and responsive user interfaces.' },
    { id: 'backend', title: 'Back-end Development', description: 'Learn to build powerful server-side applications and APIs.' },
    { id: 'cybersecurity', title: 'CyberSecurity', description: 'Protect systems and data from digital attacks and threats.' },
    { id: 'software', title: 'Software Development', description: 'Understand the full lifecycle of software design and implementation.' },
    { id: 'datascience', title: 'Data Science', description: 'Extract insights and knowledge from data using scientific methods.' },
];

const HomePage = () => {
    return (
        <div className="home-container">
            <h1>Choose Your Path</h1>
            <div className="course-grid">
                {courses.map(course => (
                    <CourseCard 
                        key={course.id}
                        id={course.id}
                        title={course.title} 
                        description={course.description} 
                    />
                ))}
            </div>
        </div>
    );
};

export default HomePage;