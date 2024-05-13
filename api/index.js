import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('Database connected');
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });

const app = express();

app.listen(5050, () => {
  console.log('Server is running on port 5050');
});


app.use('/api/user', userRoutes);