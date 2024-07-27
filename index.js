const express = require('express');
const path = require('path');

const app = express();
const port = 3000 || process.env.PORT; // You can use any port you prefer

// Serve static files from the "public" directory
// app.use(express.static(path.join(__dirname, 'public')));

// Handle GET requests to the root URL
app.get('/', (req, res) => {
  // Send the index.html file
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
