// Actions
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

// initail state
const initialState = [];

// Action creators
export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const getBooks = () =>
  // eslint-disable-next-line no-unused-vars,implicit-arrow-linebreak
  (dispatch) => {
    fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/1g1Rz39w3QzdRJbRUFqe/books')
      .then((response) => response.json()).then(
        (data) => {
          Object.keys(data).forEach((item) => {
            const book = {
              item_id: item,
              ...data[item][0],
            };
            dispatch(addBook(book));
          });
        },
      );
  };

// eslint-disable-next-line default-param-last
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((item) => Number(item.item_id) !== Number(action.payload));
    default:
      return state;
  }
};

export default booksReducer;
