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
app.listen(port, () => {
  console.log('Listening');
});