import React from 'react';
import BookItem from '../book-item/BookItem';

function ListBooks(Props) {
  const { books } = Props;
  console.log(books);
  return (
    <div>
      {
        books.map((book) => (
          <BookItem
            key={book.id}
            book={book}
          />
        ))
      }
    </div>
  );
}

export default ListBooks;
