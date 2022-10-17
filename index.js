const { json } = require('express');
const express = require('express');
const { addListener } = require('nodemon');
const app= express();
const port = 8081;
app.use(express.json());
app.get('/',(req,res)=>{
    res.status(200).json({
        message:"Hello World",
    });
});
app.all("*",(req,res)=>{
    res.status(404).json({
        message:"This route is does not exist",
    });
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
