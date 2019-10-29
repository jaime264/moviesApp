import Movie from '../Movie';

class MovieRepository {

  constructor(model) {
    this.model = model;
  }

  async create(object) {
    return await this.model.create(object);
  }

  async update(object) {
    const movieId = object.id.movieId
    const movieTittle = object.movie.tittle

    console.log(object)

    return await this.model.update({_id : movieId}, {
      tittle : movieTittle
    });
  }
}

export default new MovieRepository(Movie);
