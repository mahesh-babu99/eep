import React from 'react';
import './StudentDashboardEnhanced.css'; // Import the new CSS file

// Component definition
const StudentDashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="academic-details">
                <div>Batch: {academicDetails.batch}</div>
                <div>Course: {academicDetails.course}</div>
                <div>Branch: {academicDetails.branch}</div>
                <div>Academic Year: {academicDetails.academic_year}</div>
                <div>Year & Semester: {academicDetails.year_semester}</div>
                <div>Section: {academicDetails.section}</div>
                <div>Status: {academicDetails.status}</div>
            </div>
            <div className="button-container">
                <button className="button">Edit</button>
                <button className="button">Delete</button>
            </div>
        </div>
    );
};

export default StudentDashboard;
