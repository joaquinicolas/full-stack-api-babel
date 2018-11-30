import * as express from 'express';
import {
  getAll,
  getById,
} from './user.dao';

const userRouter = express.Router();

userRouter.get('/', async (req, res, next) => {
  try {
    const result = await getAll();
    if (!result) {
      return res.status(204).send();
    }
    return res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
});

userRouter.get('/:id', async (req, res, next) => {
  try {
    const user = await getById(req.params.id);
    if (!user) {
      return res.status(204).send();
    }
    return res.status(200).json(user);
  } catch (err) {
    return next(err);
  }
});

export default userRouter;
