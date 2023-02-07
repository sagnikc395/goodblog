import { useState } from "react";
import "./styles/index.css";

const blogs = {
  space: ["lolz1", "lolz2"],
  economcis: ["lolz3", "lolz4"],
  history: ["lolz5", "lolz6"],
};

const blogGenre = Object.keys(blogs);

function App() {
  const [blogItem, setBlogItem] = useState("");

  function blogItemHandler(genre) {
    //returns all the blog items for the given genre
    const blogsArr = blogs[genre];
    let result = "";
    blogsArr.map((item) => (result += item + ";"));
    setBlogItem(result);
    //console.log("clicked");
  }

  function processBlogLists(blogItem) {
    //split a blog by ; and return a array
    return blogItem.split(";");
  }

  return (
    <div className="App">
      <h1 className="main-title">goodblog</h1>
      <p className="main-title-description">
        Checkout my favourite blogs.Select a genre to get started.
      </p>
      <ul className="blog-list-genre">
        {blogGenre.map((genre) => {
          return (
            <li key={genre} onClick={() => blogItemHandler(genre)}>
              {genre}
            </li>
          );
        })}
      </ul>
      <hr />
      <div className="blog-container">
        <ul>
          {processBlogLists(blogItem).map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
