import { useContext } from "react";
import { BooksContext } from "../Contexts/BooksContext";

export const ShelfComponent = ({ shelfName }) => {
  const { addToShelf, books } = useContext(BooksContext);
  const booksInCurrentShelf = books.filter((book) => book.shelf === shelfName);

  const onShelfChange = (e, id) => {
    addToShelf(books, e.target.value, id);
  };

  return (
    <div>
      <ul className="ul-style">
        {booksInCurrentShelf.map((book) => {
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
