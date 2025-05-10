const express=require('express');
const userService=require('../service/UserService')


const getAllUser = (req,res) => {
   let users;

   users=userService.readDataFromFile();

   users=userService.sortingValuesUsingParam(req,users);

   res.json(users);
  };
  









module.exports={getAllUser}