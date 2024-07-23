import React, { useContext } from 'react';
import LoginContext from '../contexts/AuthContext';

const Dashboard = () => {
    const { logoutUser, usersData } = useContext(LoginContext)
    const loggedInUser = usersData.find(user => user.isLoggedIn)
    function handleLogout() {
        logoutUser(loggedInUser.username)
    }
    return (
        <div className="dashboard-container">
            <aside className="dashboard-sidebar">
                <ul className="dashboard-menu">
                    <li className="dashboard-menu-item">Home</li>
                    <li className="dashboard-menu-item">Profile</li>
                    <button className="dashboard-menu-item" onClick={handleLogout}>Logout</button>
                </ul>
            </aside>
            <main className="dashboard-main">
                <div className="dashboard-welcome">
                    <h2>Welcome to your Dashboard, FirstName!</h2>
                    <p className="dashboard-intro">Here you can manage your settings, view your profile, and more.</p>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
