import { useEffect, useState } from "react";
import Movie from "./Movie";
import Result from "./Result";

const MOVIE_TYPE = ["Action", "Comedy", "Thriller", "Investigation"];
const API_KEY = "36aa0f5f49e955969097838d95356f6c";
const image_address = "https://image.tmdb.org/t/p/w500/";

const SearchParams = () => {
  //   const name = "addaad";
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [rating, setRating] = useState("");
  const [movies, setMovies] = useState([]);
  const ratings = ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"];

  useEffect(() => {
    callFunc();
  }, []); //NEVER DO IT after it's first run

  async function callFunc() {
    const res = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
    );
    const json = await res.json();
    setMovies(json.results);
  }

  console.log(movies.length);

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          callFunc();
        }}
      >
        <label htmlFor="movieName">Name</label>
        <input
          id="location"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setType("");
          }}
          placeholder="Search movie"
        />

        <label htmlFor="movieType">Genre</label>
        <select
          id="location"
          value={type}
          onChange={(e) => {
            setType(e.target.value);
            setRating("");
          }}
        >
          <option />
          {MOVIE_TYPE.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>

        <label htmlFor="rating">Rating </label>
        <select
          id="location"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option />
          {ratings.map((rating) => (
            <option key={rating}>{rating}</option>
          ))}
        </select>

        <button>Submit</button>
      </form>
      {/* {movies.map((movie) => (
        <Movie name={movie.title || movie.name} key={movie.id} />
      ))} */}

      <Result movies={movies} />
    </div>
  );
};

export default SearchParams;
