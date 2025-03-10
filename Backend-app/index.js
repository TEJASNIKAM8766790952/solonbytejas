const express = require('express');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./Models/db');
const userRoutes = require('./routes/userRoutes');
const appointmentRoutes = require('./routes/appointments');
const AuthRouter = require('./routes/AuthRouters');
// const ProductRouter = require('./routes/ProductRouter');

const app = express();
const PORT = process.env.PORT || 5005;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

console.log('Initializing server...');

// Routes
app.get('/start', (req, res) => {
  res.send('I am Back');
});

// Route groups
app.use('/api', userRoutes);
app.use('/api', appointmentRoutes);
app.use('/auth', AuthRouter);
// app.use('/products', ProductRouter);

// Catch-all for unhandled routes
app.use((req, res) => {
  console.log(`Unhandled route: ${req.method} ${req.originalUrl}`);
  res.status(404).json({ error: 'Route not found' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
