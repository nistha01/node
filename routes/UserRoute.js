const express= require('express');
const router= express.Router();
const userController=require('../controllers/UserController');


router.get('/users',userController.getAllUser);
console.log("inside router");

module.exports = router;
