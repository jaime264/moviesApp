import UserRepository from '../models/repositories/UserRepository';

async function createUser(req, res) {
  const user = req.body;

  await UserRepository.create(user)
    .then((newUser) => {
      return res.json(newUser);
    }).catch((errors) => {
      return res.status(500).json({
        errors
      });
    });
}

export default { createUser };
