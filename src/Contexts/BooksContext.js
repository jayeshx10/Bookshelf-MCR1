import { useState, createContext } from "react";
import { booksDB } from "/src/db/booksDB";

export const BooksContext = createContext();

export const ContextProvider = ({ children }) => {
  const [books, setBooks] = useState(booksDB);
  const [filterKeyword, setFilterKeyword] = useState("");

  const addToShelf = (books, targetShelf, bookID) => {
    const newData = [...books].map((book) =>
      Number(book.id) === Number(bookID)
        ? { ...book, shelf: targetShelf }
        : book
    );
    setBooks(newData);
  };

  // const filterHandler = (e) => {
  //   setFilterKeyword(e.target.value.toUpperCase());
  // };

  const filteredBooks = filterKeyword
    ? books.filter((book) => book.name.toUpperCase().includes(filterKeyword))
    : books;

  return (
    <BooksContext.Provider
      value={{ addToShelf, books, setFilterKeyword, filteredBooks }}
    >
      {children}
    </BooksContext.Provider>
  );
};
