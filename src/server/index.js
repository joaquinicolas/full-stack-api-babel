import express from 'express';
import cors from 'cors';
import {
  userRouter,
} from './user';

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use('/', userRouter);

app.use((err, req, res) => {
  if (!err.statusCode) {
    // eslint-disable-next-line no-param-reassign
    err.statusCode = 500;
  }

  res.status(err.statusCode).send({
    error: err.message,
  });
});
app.listen(port, () => {
  console.log('Listening');
});
