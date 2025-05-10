// service/UserService.js
const fs = require('fs');
const path = require('path');



const readDataFromFile=()=>{
    const filePath = path.join(__dirname, '../data/UserData.json');
    const data = fs.readFileSync(filePath, 'utf8'); 
    const userData = JSON.parse(data);
    return userData;
}

const sortingValuesUsingParam=(req,users)=>{
    if(req.query.age){
        const age= parseInt(req.query.age);
        users=users.filter(ele=>(ele.age===age));
    }
    if(req.query.sortBy==='username'){
        users=users.sort((a,b)=>a.username.localeCompare(b.username))
    }
    return users;
}

module.exports = { readDataFromFile,sortingValuesUsingParam };
