import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './routes/routes.js';

dotenv.config();

const port = process.env.PORT || 3000;

mongoose.connect(process.env.ATLAS_URI);

const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
});
database.once('connected', () => {
  console.log('Database Connected');
});

const app = express();

app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
