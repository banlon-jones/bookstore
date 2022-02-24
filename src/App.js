import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import BooksPage from './pages/books/BooksPage';
import CategoriesPage from './pages/category-page/CategoriesPage';
import { getBooks } from './redux/books/books';

function App() {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getBooks()); }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="categories" element={<CategoriesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
