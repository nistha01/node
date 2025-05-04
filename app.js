const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const orderRoutes=require('./order')

app.use('/orders',orderRoutes);



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
