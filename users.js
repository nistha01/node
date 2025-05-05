const express = require('express');
const router=express.Router();


router.get('/getUsers',(req,res)=>{
    res.send("this is list of all users");
})

router.post('/addUser',(res,req)=>{
    const {name, age, sex}= res.body()
     
    if(!name || !age || !sex){
        res.send(`Bad request`);
    }
    res.send(`User ${name} added successfully`);
})

router.get('/getUserById:id',(req,res)=>{
    const id=req.params.id;
    res.send(`found user ${id}`);
})

module.exports=router;