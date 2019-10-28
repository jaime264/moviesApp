import User from '../User';

class UserRepository {

  constructor(model) {
    this.model = model;
  }

  create(object) {
    return this.model.create(object);
  }
}

export default new UserRepository(User);
