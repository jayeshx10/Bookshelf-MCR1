import { ShelfComponent } from "./ShelfComponent";

export const Home = () => {
  return (
    <div>
      <hr />
      <h1 className="shelf-heading">Currently Reading</h1>
      <ShelfComponent shelfName="currentlyReading" />
      <hr />
      <h1 className="shelf-heading">Want to read</h1>
      <ShelfComponent shelfName="wantToRead" />
      <hr />
      <h1 className="shelf-heading">Read</h1>
      <ShelfComponent shelfName="read" />
    </div>
  );
};
