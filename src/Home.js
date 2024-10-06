// Home.js
import React from 'react';
import './App.css'; // Assuming you will write styles here

function Home({ books, t }) {
  return (
    <main className="main-background">
      <section className="auth-section">
        <div className="box admin-box">
          <h1>{t('admin')}</h1>
          <button>{t('login')}</button>
          <button>{t('signup')}</button>
        </div>
        <div className="box user-box">
          <h1>{t('user')}</h1>
          <button>{t('login')}</button>
          <button>{t('signup')}</button>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="featured-books">
        <h2 className='fe'>{t('featuredBooks')}</h2>
        <div className="books-grid">
          {books.map((book, index) => (
            <div key={index} className="book-card">
              <img src={book.imageUrl} alt={book.name} />
              <p>{book.name}</p>
              <p>{book.author}</p>
              <p>{book.year}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
