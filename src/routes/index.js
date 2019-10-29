import express from 'express';
import users from './users';
import movies from './movies';


const router = express.Router();

router.use(express.json());

router.use('/api/users', users);
router.use('/api/movies', movies);

export default router;
