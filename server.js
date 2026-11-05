
import express from 'express';
import homeRoutes from './src/routes/homeRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Configure EJS as our template engine
app.set('view engine', 'ejs');
app.set('views', './src/views');

// Use homepage routes
app.use('/', homeRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
