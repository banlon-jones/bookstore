import React from 'react';
import './addnewbook.css';

function AddNewBooks() {
  return (
    <div>
      <div>
        <h2> ADD NEW BOOK </h2>
      </div>
      <form>
        <input type="text" name="book-title" className="book-title-Panel" placeholder="Book Title" />
        <select className="select-Panel" placeholder="Categories">
          <option> category </option>
        </select>
        <button className="btn" type="button"> ADD BOOK </button>
      </form>
    </div>
  );
}

export default AddNewBooks;
