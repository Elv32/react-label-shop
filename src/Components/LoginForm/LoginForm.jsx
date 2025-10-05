import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
  // Use multiple state variables for better readability
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your login logic here, e.g., sending data to the backend for authentication.
    // Simulate a successful login for demonstration purposes.
    const loginResponse = await simulateLogin(email, password);

    if (loginResponse.success) {
      // If login is successful, you can handle it here (e.g., redirect, show a success message)
      // For example, you can redirect to the user's dashboard: history.push('/dashboard');
    } else {
      // Handle login failure, show an error message, etc.
      setError('Invalid credentials. Please try again.');
    }
  };

  // Simulated login function
  const simulateLogin = (email, password) => {
    // Simulate a login request to the backend
    // Replace this with your actual login logic
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulate a successful login for demonstration
        if (email === 'demo@example.com' && password === 'password') {
          resolve({ success: true });
        } else {
          resolve({ success: false });
        }
      }, 1000);
    });
  };

  return (
    <div className="login-container">
      <div className="app__navbar-login">
        <Link to="/login"></Link>
        <div className="login-form">
          <h2>Login/Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handleChange}
                required
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            {/* Replace your existing button with a login button */}
            <button type="submit">
              Login
            </button>
          </form>
          <p>
            Don't have an account?{' '}
            <Link to="/register">Create an Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
