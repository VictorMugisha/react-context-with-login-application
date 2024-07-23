import React, { useState } from 'react';

const LoginPage = ({handleLoginSubmit}) => {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        handleLoginSubmit(formData.username, formData.password)
    }

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name='username'
            onChange={handleChange}
            value={formData.username}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name='password'
            onChange={handleChange}
            value={formData.password}
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
