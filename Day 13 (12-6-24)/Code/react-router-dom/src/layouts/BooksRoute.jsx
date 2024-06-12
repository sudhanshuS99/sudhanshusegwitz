import React from "react";
import Book from "../pages/Book";
import NewBook from "../pages/NewBook";
import BookList from "../pages/BookList";
import { Routes, Route } from "react-router-dom";
import BookLayout from "./BookLayout";
const BooksRoute = () => {
  return (
    <div>
      <BookLayout />
      <Routes>
        <Route index element={<BookList />} />
        <Route path=":id" element={<Book />} />
        <Route path="new" element={<NewBook />} />
      </Routes>
    </div>
  );
};

export default BooksRoute;
