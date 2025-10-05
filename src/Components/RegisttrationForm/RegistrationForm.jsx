import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegistrationForm.css';

const RegistrationForm = () => {
  // Use multiple state variables for better readability
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add registration logic here, e.g., send the formData to the backend
    // Simulate a successful registration for demonstration purposes
    const registrationResponse = await simulateRegistration(formData);

    if (registrationResponse.success) {
      // Redirect to the upgrade page using the Link component
      // Replace '/upgrade' with the actual path to your upgrade page
      window.location.href = '/upgrade'; // Redirect using window.location
    } else {
      // Handle registration failure, show an error message, etc.
    }
  };

  // Simulated registration function
  const simulateRegistration = (formData) => {
    // Simulate a registration request to the backend
    // Replace this with your actual registration logic
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulate a successful registration for demonstration
        resolve({ success: true });
      }, 1000);
    });
  };

  return (
    <div className="registration-container">
      <div className="registration-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="FirstName">First Name</label>
            <input
              type="text"
              id="FirstName"
              name="FirstName"
              value={formData.FirstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="LastName">Last Name</label>
            <input
              type="text"
              id="LastName"
              name="LastName"
              value={formData.LastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          {/* Replace your existing button with a registration button */}
          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account?{' '}
          <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
