const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.send("here is the list of all orders");
})

router.get('/x',(req,res)=>{
    res.send("this is x ");
})

module.exports=router;