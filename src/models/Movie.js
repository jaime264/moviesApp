import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
  tittle: {
    type: String
  },
  description: {
    type: String
  }
}, {collection:'Movies'} );

const Movie = mongoose.model('Movie', schema);
export default Movie;
