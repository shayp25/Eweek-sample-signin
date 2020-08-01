const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT ||5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {useNewUrlParser:true, useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:false});
const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log("connected to MongoDB");
})

//import specific route
const signInRouter = require('./routes/signIn');
const judgingRouter = require('./routes/judging');
const placementRouter = require('./routes/placement');

//implement specific route for a commmand on /Signin
app.use('/signIn',signInRouter);
app.use('/judging',judgingRouter);
app.use('/placement',placementRouter);


app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
});
