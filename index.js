const express = require('express');
const connectDB = require('./config/db');

const app = express();

//connect DB
connectDB();

app.use(express.json({ extended: false }));

const PORT = 5000

app.listen(PORT, () => console.log(`server started successfully, running on port ${PORT}`));