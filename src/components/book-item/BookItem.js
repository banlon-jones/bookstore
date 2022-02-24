import React from 'react';
import './BookItem.css';
import { useDispatch } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { removeBook } from '../../redux/books/books';

function BookItem(Props) {
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();
  const { book } = Props;
  const clickHandle = (e) => {
    fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/1g1Rz39w3QzdRJbRUFqe/books/${e.target.value}`, {
      method: 'DELETE',
    });
    dispatch(removeBook(e.target.value));
  };
  return (
    <div>
      <div className="Lesson-Panel layout">
        <div>
          <span className="School-of">
            { book.category }
          </span>
          <div>
            <div className="book-title">
              { book.title }
            </div>
          </div>
          <div>
            <span className="Suzanne-Collins">
              Suzanne Collins
            </span>
          </div>
          <div>
            <span className="Comments">
              Comments  |
            </span>
            <span className="Edit">
              Edit
            </span>
          </div>
        </div>
        <div>
          <button type="button" className="btn" value={book.item_id} onClick={clickHandle}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookItem;
