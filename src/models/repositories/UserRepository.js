import User from '../User';

class UserRepository {

  constructor(model) {
    this.model = model;
  }

  async create(object) {
    return await this.model.create(object);
  }
}

export default new UserRepository(User);
