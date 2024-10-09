import React from 'react';
import './App.css'; // Assuming you will write styles here

function Home({ books, t }) {
  // Open the PDF in a new tab
  const openBookPdf = (pdfUrl) => {
    if (pdfUrl) {
      window.open(pdfUrl, '_blank');
    } else {
      alert('PDF not available for this book.');
    }
  };

  return (
    <main className="main-background">
      <section className="auth-section">
        <div className="box admin-box">
          <h1>{t('admin')}</h1>
          <button onClick={() => (window.location.href = '/AdminLogin')}>{t('login')}</button>
          <button onClick={() => (window.location.href = '/AdminSignup')}>{t('signup')}</button>
        </div>
        <div className="box user-box">
          <h1>{t('user')}</h1>
          <button onClick={() => (window.location.href = '/UserLogin')}>{t('login')}</button>
          <button onClick={() => (window.location.href = '/UserSignup')}>{t('signup')}</button>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="featured-books">
        <h2 className='fe'>{t('featuredBooks')}</h2>
        <div className="books-grid">
          {books.map((book, index) => (
            <div
              key={index}
              className="book-card"
              onClick={() => openBookPdf(book.pdf)}  // Open the PDF when clicked
            >
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
