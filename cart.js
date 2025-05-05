const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.send("here is the list of all orders");
})

router.get('/x',(req,res)=>{
    res.send("this is x ");
})
//dynamic route
router.get('/oder:id',(req,res)=>{
    const orderId=req.params.id;
    res.send(`this is the order ${orderId}`)
})

module.exports=router;