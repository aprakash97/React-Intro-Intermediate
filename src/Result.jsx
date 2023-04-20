import Movie from "./Movie";
const image_address = "https://image.tmdb.org/t/p/w500/";

const Result = ({ movies }) => {
  return (
    <div className="search">
      {!movies.length ? (
        <h1>No Movies Found </h1>
      ) : (
        movies.map((movie) => {
          return (
            <Movie
              name={movie.name || movie.title}
              image={image_address + movie.poster_path}
              id={movie.id}
              date={movie.release_date}
              key={movie.id}
              // release_date={movie.release_date}
            />
          );
        })
      )}
    </div>
  );
};

export default Result;
