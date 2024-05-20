// "src/BookList.js"
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectGenre1, selectGenre2, selectGenre3 } from './selectors';

const BookList = () => {
  const [genre, setGenre] = useState('genre1');
  
  const books = useSelector((state) => {
    switch (genre) {
      case 'genre1':
        return selectGenre1(state);
      case 'genre2':
        return selectGenre2(state);
      case 'genre3':
        return selectGenre3(state);
      default:
        return [];
    }
  });

  return (
    <div>
      <h1>Book List</h1>
      <div>
        <button onClick={() => setGenre('genre1')}>Genre1</button>
        <button onClick={() => setGenre('genre2')}>Genre2</button>
        <button onClick={() => setGenre('genre3')}>Genre3</button>
      </div>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
