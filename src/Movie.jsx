const Movie = ({ id, name, image, date }) => {
  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={image} alt="" />
      </div>
      <div className="info">
        <h2>{name}</h2>
        <h3>{date}</h3>
      </div>
    </a>
  );
};

export default Movie;
