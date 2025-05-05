const express=require('express');
const router=express.Router();

router.use((req, res, next) => {
    console.log(`${req.method} request made to ${req.originalUrl}`);
    next();
  });

router.get('/products',(req,res)=>{
res.send("here is the list of all products")
});

router.post('/product',(req,res)=>{
    res.send("product is added");
})

module.exports=router;