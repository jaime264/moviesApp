import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
  email: {
    type: String
  },
  password: {
    type: String
  }
}, {collection:'Usuario'} );

const User = mongoose.model('User', schema);
export default User;
