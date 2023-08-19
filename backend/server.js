const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 4000;
const apiRoutes = require('./routes/api');  

mongoose.model

const corsOptions = {
  origin: 'https://b1nh.com',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(express.json()); 
app.use('/api', apiRoutes);  

//unhardcode this value
mongoose.connect('mongodb+srv://houseboy:binh@cluster0.edutdyo.mongodb.net', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas...'))
  .catch(err => console.error('Could not connect to MongoDB Atlas...', err));


// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


