import React from 'react';
import './BookItem.css';

function BookItem() {
  return (
    <div>
      <div className="Lesson-Panel">
        <span className="School-of">
          Action
        </span>
        <div>
          <span className="Title">
            The Hunger Games
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
          <span className="Remove">
            Remove |
          </span>
          <span className="Edit">
            Edit
          </span>
        </div>
      </div>
    </div>
  );
}

export default BookItem;
