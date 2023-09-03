import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import apiRoutes from './backend/routes/api';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

const corsOptions = {
  // origin: 'https://b1nh.com',
  origin: 'http://localhost:4000',
  optionsSuccessStatus: 200,
};

// app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', apiRoutes);

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

export const connectDb = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    cached.promise = mongoose.connect('mongodb+srv://houseboy:binh@cluster0.edutdyo.mongodb.net', opts).then((mongoose) => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default server;