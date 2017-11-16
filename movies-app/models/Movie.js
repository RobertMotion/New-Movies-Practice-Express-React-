const db = require('../db/config');

const Movie = {};

Movie.findAll = () => {
  return db.query('SELECT * FROM movies');
};

Movie.findById = (id) => {
  return db.one('SELECT * FROM movies WHERE id = $1', id);
};

Movie.create = (movie) => {
  return db.one(`
    INSERT INTO movies
    (title, description, genre)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
    `, [movie.title, movie.description, movie.genre]);
};

Movie.update = (movie, id) => {
  return db.none('DELETE FROM movies WHERE id = $1', id);
};

Movie.destroy = (id) => {
  return db.none(`
    DELETE FROM movies
    WHERE id = $1
    `, [id]);
}

module.exports = Movie;
