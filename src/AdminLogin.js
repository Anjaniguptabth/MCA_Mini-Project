import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Styles.css';

const AdminLogin = () => {
  const { t } = useTranslation(); // Initialize translation
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle admin login logic here
    console.log('Admin logging in:', { email, password });
    // You can add your login logic here
  };

  return (
    <div className="form-container">
      <h2>{t('admin')} {t('login')}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder={t('emailPlaceholder')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder={t('passwordPlaceholder')} // Ensure you have this key in your i18n file
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{t('login')}</button>
      </form>
      <p>
        <a href="/forgot-password">{t('forgotPassword')}</a> {/* Add key in i18n for this */}
      </p>
      <p>
        {t('dontHaveAccount')} <a href="/AdminSignup">{t('signup')}</a> {/* Add keys in i18n for this */}
      </p>
    </div>
  );
};

export default AdminLogin;
