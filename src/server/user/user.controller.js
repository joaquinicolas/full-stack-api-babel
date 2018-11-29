import * as express from 'express';
import {
  getAll, getById,
} from './user.dao';

const userRouter = express.Router();

userRouter.get('/', async (req, res) => {
  const result = await getAll();
  return res.status(200).json(JSON.parse(result));
});

userRouter.get('/:id', async (req, res) => {
  const user = await getById('5babfe33c553cab2849d9c2f');
  return res.status(200).json(user);
});

export default userRouter;
