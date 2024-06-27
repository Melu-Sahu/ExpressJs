import express from "express";


const app = express();


app.get('/',(req, res)=>{
    res.status(200).json({message: "Hello. from backend."});
})


const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log(`Server running on : ${PORT}`);
})