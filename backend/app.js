import Express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = Express();

mongoose
  .connect(
    `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.mtqh778.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => app.listen(8080, () => console.log('server and database connected')))
  .catch((e) => console.log(e));

// app.use('/', (req, res, next) => {
//     res.send('hello');
// })

// app.listen(8080, () => {
//     console.log(`server is live ${8080}`)
// })
