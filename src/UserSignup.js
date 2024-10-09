import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { useTranslation } from 'react-i18next'; // Import useTranslation for i18n
import './Styles.css';

const UserSignup = () => {
  const { t } = useTranslation(); // Initialize translation
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // New state for confirm password
  const [contactNumber, setContactNumber] = useState(''); // New state for contact number
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Reset error message

    // Validate password and confirm password
    if (password !== confirmPassword) {
      setErrorMessage(t('passwordMismatch')); // Use translation for error message
      return;
    }

    // Mock signup logic
    try {
      // Here, replace this mock with actual API call
      console.log('User signing up:', { name, email, password, contactNumber });
      // Simulate API response delay
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating network delay

      // Navigate to the login page on successful signup
      navigate('/UserLogin');
    } catch (error) {
      // Handle signup error
      setErrorMessage(t('signupFailed')); // Use translation for error message
    }
  };

  return (
    <div className="form-container">
      <h2>{t('signup')}</h2> {/* Use translation for heading */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={t('namePlaceholder')} // Use translation for placeholder
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder={t('emailPlaceholder')} // Use translation for placeholder
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder={t('contactPlaceholder')} // Use translation for placeholder
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder={t('passwordPlaceholder')} // Use translation for placeholder
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder={t('confirmPasswordPlaceholder')} // Use translation for placeholder
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">{t('signup')}</button> {/* Use translation for button text */}
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Error message */}
      <p>
        {t('dontHaveAccount')} <a href="/UserLogin">{t('login')}</a> {/* Use translation for the message */}
      </p>
    </div>
  );
};

export default UserSignup;
