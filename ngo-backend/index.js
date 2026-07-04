require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const volunteerRoutes = require('./routes/volunteers');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve your existing website files (put ngo_fav.html and any assets in /public)
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.use('/api/volunteers', volunteerRoutes);

// Connect to MongoDB
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/ngo_db';

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
