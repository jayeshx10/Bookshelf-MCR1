import { useContext } from "react";
import { Link } from "react-router-dom";

import { BooksContext } from "/src/Contexts/BooksContext";

export const Search = () => {
  const { addToShelf, books, setFilterKeyword, filteredBooks } = useContext(
    BooksContext
  );

  const onShelfChange = (e, id) => {
    addToShelf(books, e.target.value, id);
  };

  const filterHandler = (e) => {
    setFilterKeyword(e.target.value.toUpperCase());
  };

  return (
    <div className="searchpage-div">
      <input
        type="text"
        placeholder="Find your book"
        onChange={filterHandler}
      />
      <ul className="ul-style">
        {filteredBooks.map((book) => {
          const { id, name, author, src, shelf } = book;

          return (
            <li key={id}>
              <img src={src} alt={name} className="img-style" />
              <p>
                <span>{name}</span>
              </p>
              <p>{author}</p>
              <select onChange={(e) => onShelfChange(e, id)}>
                <option
                  value="currentlyReading"
                  selected={shelf === "currentlyReading" ? true : false}
                >
                  Currently Reading
                </option>
                <option
                  value="wantToRead"
                  selected={shelf === "wantToRead" ? true : false}
                >
                  Want to read
                </option>
                <option value="read" selected={shelf === "read" ? true : false}>
                  Read
                </option>
                <option value="none" selected={shelf === "none" ? true : false}>
                  None
                </option>
              </select>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
