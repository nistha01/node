const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const orderRoutes=require('./order')
const productRoutes=require('./products')

app.use('/orders',orderRoutes);
app.use('/p',productRoutes);



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
