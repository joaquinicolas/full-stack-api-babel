import express from 'express';
import {
  userRouter,
} from './user';


const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use('/api', userRouter);
app.get('/', (req, res) => {
  res.send('Hello World');
});

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
