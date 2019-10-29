import MovieRepository from '../models/repositories/MovieRepository';

async function createMovie(req, res) {
  const movie = req.body;

  await MovieRepository.create(movie)
    .then((newMovie) => {
      return res.json(newMovie);
    }).catch((errors) => {
      return res.status(500).json({
        errors
      });
    });
}

async function updateMovie(req, res) {
  const movie = req.body
  const id = req.params

  await MovieRepository.update({id, movie})
    .then((Movie) => {
      return res.json(Movie);
    }).catch((errors) => {
      return res.status(500).json({
        errors
      });
    });
}

export default { createMovie, updateMovie };