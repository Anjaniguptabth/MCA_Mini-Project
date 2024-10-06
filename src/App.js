import React, { useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; // Assuming you will write styles here
import About from './About';  // Import About component
import Home from './Home';    // Import Home component
import Contact from './Contact';

function App() {
  const { t, i18n } = useTranslation();
  
  const [books, setBooks] = useState([
    {
      name: 'The Alchemist',
      author: 'Paulo Coelho',
      year: '1988',
      imageUrl: 'https://m.media-amazon.com/images/I/81P09+IjlzL._SL1500_.jpg'
    },
    {
      name: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      year: '1960',
      imageUrl: 'https://m.media-amazon.com/images/I/8189-1domnL._SL1500_.jpg'
    },
    {
      name: '1984',
      author: 'George Orwell',
      year: '1949',
      imageUrl: 'https://m.media-amazon.com/images/I/71ppIPqdYNL._SL1500_.jpg'
    },
    {
      name: 'Pride and Prejudice',
      author: 'Jane Austen',
      year: '1813',
      imageUrl: 'https://m.media-amazon.com/images/I/81cMnNCSunL._SL1500_.jpg'
    },
    {
      name: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      year: '1925',
      imageUrl: 'https://kitabay.com/cdn/shop/files/WhatsAppImage2024-06-20at5.01.26PM_1.jpg?v=1718883141&width=940'
    },
    {
      name: 'Dark Psychology Secrets & Manipulation',
      author: 'Amy Brown',
      year: '2024',
      imageUrl: 'https://m.media-amazon.com/images/I/41MIRulMXvL._SY445_SX342_.jpg'
    },
    {
      name: 'Pahile Prem',
      author: 'V. S. Khandekar',
      year: '2019',
      imageUrl: 'https://d34a0mln2492j4.cloudfront.net/unsigned/resize:fit:488:688:0/gravity:sm/plain/https%3A%2F%2Fbookscape-s3-bucket.s3.amazonaws.com%2Fproduct_images%2F9788177663761.jpg'
    },
    {
      name: 'Moby Dick',
      author: 'Herman Melville',
      year: '1851',
      imageUrl: 'https://m.media-amazon.com/images/I/713PySShaSL._SL1500_.jpg'
    }
  ]);

  const [languageIndex, setLanguageIndex] = useState(0);
  const languages = ['mr', 'en', 'hi'];

  // Fetch books from the backend when the language changes
  const fetchBooks = (lang) => {
    axios.get(`http://localhost:5000/api/books?lang=${lang}`)
      .then(response => {
        if (Array.isArray(response.data)) {
          setBooks(response.data);  // Ensure response data is an array
        } else {
          console.error("Invalid books data:", response.data);
        }
      })
      .catch(error => {
        console.error("Error fetching books:", error);
      });
  };

  // Change language
  const changeLanguage = () => {
    const newIndex = (languageIndex + 1) % languages.length;
    const newLang = languages[newIndex];
    setLanguageIndex(newIndex);
    i18n.changeLanguage(newLang);
    fetchBooks(newLang);
  };

  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <header className="navbar">
          <div className="left-section">
            <span className="ps-symbol">PS</span>
            <span className="brand-name">{t('pustakPathsala')}</span>
          </div>
          <div className="right-section">
            <button className="language-icon" onClick={changeLanguage} title={t('changeLanguage')}>
              🌐 
            </button>
            <nav>
              <Link to="/">{t('home')}</Link>
              <Link to="/about">{t('about')}</Link>
              <Link to="/contact">{t('contact')}</Link>
            </nav>
          </div>
        </header>

        {/* Routes - Rendering based on the current path */}
        <Routes>
          <Route path="/" element={<Home books={books} t={t} />} />
          <Route path="/about" element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

        {/* Footer */}
        <footer className="footer">
          <p>@theshield 2024</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
