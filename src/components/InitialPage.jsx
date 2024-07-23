import React from 'react';

const InitialPage = ({ handleSigninClick }) => {
    return (
        <div className="initial-page-container">
            <header className="initial-page-header">
                <h1 className="initial-page-title">Welcome to Our App</h1>
            </header>
            <main className="initial-page-main">
                <p className="initial-page-description">
                    Please sign in to access your dashboard.
                </p>
                <button className="initial-page-login-button" onClick={handleSigninClick}>
                    Login
                </button>
            </main>
        </div>
    );
};

export default InitialPage;
