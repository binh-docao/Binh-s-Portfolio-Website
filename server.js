import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import apiRoutes from './backend/routes/api';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

const corsOptions = {
  origin: 'https://b1nh.com',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', apiRoutes);

// Use environment variable for MongoDB connection string
mongoose.connect('mongodb+srv://houseboy:binh@cluster0.edutdyo.mongodb.net', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB Atlas...'))
  .catch(err => console.error('Could not connect to MongoDB Atlas...', err));

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
