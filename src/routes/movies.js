import express from 'express';
import MovieController from '../controllers/MovieController';

const router = express.Router();

router.post('/', MovieController.createMovie);
router.put('/:movieId', MovieController.updateMovie);

export default router;
