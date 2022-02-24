import React from 'react';
import './BookItem.css';
import { useDispatch } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import progress from './images/Group.png';
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
    <div className="container-fluid">
      <div className="Lesson-Panel layout">
        <div>
          <div className="book-category">
            { book.category }
          </div>
          <div>
            <h2 className="book-title">
              { book.title }
            </h2>
          </div>
          <div className="author">
            Suzanne Collins
          </div>
          <div className="controls">
            <span className="Comments">
              Comments
            </span>
            <span className="Comments">
              Edit
            </span>
            <span className="Edit">
              <button className="remove Edit" type="button" value={book.item_id} onClick={clickHandle}>
                Remove
              </button>
            </span>
          </div>
        </div>
        <div className="progress-section">
          <div>
            <img src={progress} className="progress" alt="progress wheel" />
          </div>
          <div>
            <h1 className="Percent-Complete">65% </h1>
            <p className="completed"> Completed </p>
          </div>
        </div>
        <div>
          <div className="chap">
            <h4> CURRENT CHAPTER </h4>
          </div>
          <p className="current-chap">
            Chapter 17
          </p>
          <div>
            <button type="button" className="btn">
              update progress
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookItem;
