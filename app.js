const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use((req, res, next) => {
  console.log("This is middleware");
  next();
});


app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
