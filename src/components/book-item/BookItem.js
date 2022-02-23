import React from 'react';
import './BookItem.css';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

function BookItem(Props) {
  const dispatch = useDispatch();
  const { book } = Props;
  const clickHandle = (e) => {
    // removeBookProps(e.target.value);
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
            <span className="Title">
              { book.title }
            </span>
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
          <button type="button" className="btn" value={book.id} onClick={clickHandle}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookItem;
