import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import './Styles.css';

const UserLogin = () => {
  const { t } = useTranslation(); // Initialize translation
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle user login logic here
    console.log('User logging in:', { email, password });
  };

  return (
    <div className="form-container">
      <h2>{t('user')} {t('login')}</h2> {/* Use translation keys */}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder={t('emailPlaceholder')} // Use translation key for placeholder
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder={t('passwordPlaceholder')} // Use translation key for placeholder
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{t('login')}</button> {/* Use translation key for button text */}
      </form>
      <p>
        <a href="/forgot-password">{t('forgotPassword')}</a> {/* Use translation key */}
      </p>
      <p>
        {t('dontHaveAccount')} <a href="/UserSignup">{t('signup')}</a> {/* Use translation keys */}
      </p>
    </div>
  );
};

export default UserLogin;
