const express=require('express');
const {log}=require('console');
const cors=require('cors');
const app=express();
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Ecom")
.then(console.log("MongoDB Conected"))
.catch((err)=>{
    console.log(err);
})
app.use(cors());
app.use(express.json());                                //conversion of bson to json or stringify

const route=require('./routes');

app.use('/api',route);



app.get(('/'),(req,res)=>{
    res.send("running at port 8000")
});

app.listen(8000,()=>console.log("running at port 8000"));