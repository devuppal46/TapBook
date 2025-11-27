const express = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv');
const mongoose = require('mongoose');

env.config(); 
const app = express(); // express app object

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());     

app.get('/home' ,(req,res)=>{
    console.log("hitting /home endpoint");
    return res.json({
        success: true,
        message: "Welcome to the Home Page"
    })
})

app.listen(process.env.PORT, async() => {
  console.log(`Server is running on port ${process.env.PORT}`);

  try{
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to the database");
  }catch(err){
    console.log("Error connecting to the database", err);
  }
});