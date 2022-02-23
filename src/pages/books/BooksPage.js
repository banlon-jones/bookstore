import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../../components/navbar/Navbar';
import ListBooks from '../../components/list-book/ListBooks';
import './BooksPage.css';
import AddNewBooks from '../../components/add-new-book/AddNewBook';

function BooksPage() {
  const books = useSelector(({ booksReducer }) => booksReducer);

  return (
    <div className="books-container">
      <Navbar />
      <br />
      <ListBooks books={books} />
      <br />
      <div className="container-fluid">
        <AddNewBooks />
      </div>
    </div>
  );
}

export default BooksPage;
