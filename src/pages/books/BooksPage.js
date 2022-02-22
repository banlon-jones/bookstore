import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import ListBooks from '../../components/list-book/ListBooks';
import './BooksPage.css';
import AddNewBooks from '../../components/add-new-book/AddNewBook';

function BooksPage() {
  return (
    <div className="books-container">
      <Navbar />
      <br />
      <ListBooks />
      <br />
      <div className="container-fluid">
        <AddNewBooks />
      </div>
    </div>
  );
}

export default BooksPage;
