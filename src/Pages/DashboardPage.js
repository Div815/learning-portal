import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
    return (
        <div className="main-content">
            <h1>My Dashboard</h1>
            <p>
                This is your personal dashboard where you can track your enrolled courses,
                view your progress, and manage your learning schedule.
            </p>
            <p>
                <em>(Content for the dashboard will be built out here.)</em>
            </p>
            <Link to="/home">← Explore Courses</Link>
        </div>
    );
};

export default DashboardPage;