import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Styles.css'; // Assuming you have styles for the cards

const AdminDashboard = () => {
    const navigate = useNavigate(); // Create a navigate function

    // Function to handle navigation to Admin Manage page
    const goToAdminManage = () => {
        navigate('/admin/manage'); // Adjust the path to your admin manage route
    };

    // Function to handle navigation to Library Manage page
    const goToLibraryManage = () => {
        navigate('/library/manage'); // Adjust the path to your library manage route
    };

    return (
        <div className="dashboard-container">
            <h1>Admin Dashboard</h1>

            <div className="card-container">
                {/* Admin Manage Card */}
                <div className="dashboard-card">
                    <h2>User Manage</h2>
                    <p>To manage users, and permissions.</p>
                    <button className="dashboard-button" onClick={goToAdminManage}>Click Here</button> {/* Button for User Manage */}
                </div>

                {/* Library Manage Card */}
                <div className="dashboard-card">
                    <h2>Library Manage</h2>
                    <p>To manage books, collections, and resources.</p>
                    <button className="dashboard-button" onClick={goToLibraryManage}>Click Here</button> {/* Button for Library Manage */}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
