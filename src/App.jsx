import { useState } from "react";
import "./styles/index.css";

const blogs = {
  space: [
    { title: "Space Title #1", rating: "3.5", href: "#" },
    { title: "Space Title #2", rating: "4", href: "#" },
  ],
  economcis: [
    { title: "Economics Title #1", rating: "2.75", href: "#" },
    { title: "Economics Title #2", rating: "4.5", href: "#" },
  ],
  history: [
    { title: "History Title #1", rating: "3.75", href: "#" },
    { title: "History Title #2", rating: "5", href: "#" },
  ],
};

const genreList = Object.keys(blogs);

function App() {
  const [genreItems, setGenreItem] = useState([]);

  function blogItemHandler(genre) {
    setGenreItem(blogs[genre]);
  }

  return (
    <div className="App">
      <h1 className="main-title">goodblog</h1>
      <p className="main-title-description">
        Checkout my favourite blogs.Select a genre to get started.
      </p>
      <ul className="blog-list-genre">
        {genreList.map((genre) => {
          return (
            <li
              className="list-item-inline"
              key={genre}
              onClick={() => blogItemHandler(genre)}
            >
              {genre}
            </li>
          );
        })}
      </ul>
      <hr />
      <div className="blog-container">
        <div>
          {genreItems.map((genreObj) => {
            return (
              <ul className="blogobj-items">
                <li className="list-item-inline genreObj-heading">{genreObj.title}</li>
                <li className="list-item-inline genreObj-rating">{genreObj.rating}/5</li>
                <li className="list-item-inline genreObj-link">
                  <a href={genreObj.href} target="_blank" className="blog-link">
                    Read More ...
                  </a>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
