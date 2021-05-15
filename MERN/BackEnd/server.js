require('./db');
const express = require('express');
//const bodyParser =require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')

const exerciseRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');


require('dotenv').config();

const app = express();
const port = process.env.PORT ||5000;

app.use(cors());
app.use(express.json());//

app.use('/exercises',exerciseRouter)
app.use('/users',usersRouter)


app.listen(port,()=>{
    console.log(`Server is running port: ${port}`);

});  