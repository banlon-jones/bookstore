import React, { useState } from 'react';
import './addnewbook.css';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';

function AddNewBooks() {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const handleSelect = (e) => {
    setCategory(e.target.value);
  };
  const handleOnchange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { item_id: new Date().getTime(), title, category };
    fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/1g1Rz39w3QzdRJbRUFqe/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    dispatch(addBook(payload));
    setCategory('');
    setTitle('');
  };
  return (
    <div>
      <div>
        <h2> ADD NEW BOOK </h2>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" className="book-title-Panel" placeholder="Book Title" value={title} onChange={handleOnchange} required />
        <select className="select-Panel" placeholder="Categories" value={category} onChange={handleSelect} required>
          <option> select category </option>
          <option value="Fiction"> Fiction </option>
          <option value="Health"> Health </option>
          <option value="History"> History </option>
          <option value="Chemistry"> Chemistry </option>
        </select>
        <button className="add-book" type="submit"> ADD BOOK </button>
      </form>
    </div>
  );
}

export default AddNewBooks;
