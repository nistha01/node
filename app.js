const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const orderRoutes=require('./cart')
const productRoutes=require('./products')
const userRoutes=require('./users');

app.use('/orders',orderRoutes);
app.use('/p',productRoutes);
app.use('/u',userRoutes);


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
