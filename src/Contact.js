import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Contact.css";

const Contact = () => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false); // State for handling error
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form Data:", formData); // Log form data for debugging

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log("Response Status:", response.status); // Log response status
      const data = await response.json(); // Fetch response data

      if (response.ok) {
        setSubmitted(true);
        setError(false);
        console.log("Success:", data); // Log success response
      } else {
        console.error("Error from backend:", data.error); // Log backend error
        setError(true);
        setSubmitted(false);
      }
    } catch (error) {
      console.error('Error during fetch:', error); // Log any fetch errors
      setError(true);
      setSubmitted(false);
    }

    // Clear form fields after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });

    // Automatically close the popup after 3 seconds (if success)
    if (submitted) {
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="contact-page">
      <h1>{t('contactTitle')}</h1>
      <p>{t('contactDescription')}</p>

      {submitted && (
        <div className="popup success">
          <p>{t('contactThankYou')}</p>
          <button onClick={() => setSubmitted(false)}>Close</button>
        </div>
      )}

      {error && (
        <div className="popup error">
          <p>{t('contactError')}</p>
          <button onClick={() => setError(false)}>Close</button>
        </div>
      )}

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">{t('nameLabel')}:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder={t('namePlaceholder')}
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">{t('emailLabel')}:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={t('emailPlaceholder')}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">{t('messageLabel')}:</label>
          <textarea
            id="message"
            name="message"
            placeholder={t('messagePlaceholder')}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">{t('sendMessageButton')}</button>
      </form>
    </div>
  );
};

export default Contact;
