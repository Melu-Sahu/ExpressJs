let express = require("express");

let fs = require('fs');

const index = fs.readFileSync('./index.html', 'utf-8')
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const product = data.products 


const app = express();



app.get('/',(req,res)=>{
    // console.log("Request",req);
    
    // console.log("Response", res);
    // res.send(`<h1>Welcome to the store</h1>`);
    //  res.sendFile("C:/Users/MELU/Desktop/Web Applications/NodeJs/ExpressJs/index.html");         // we can send files useing this also.
    // res.json(product);           
    res.sendStatus(200);
    // res.status(200);         // only this will throw some error to frontend



})





app.listen(3400,()=>console.log("Server started at 3400"));