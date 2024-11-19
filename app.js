const mongoose = require('mongoose');
const express = require('express');
require ('dotenv').config({path: 'env'});
const app = express();
const path = require('path');
const PORT = process.env.port || 3000;
const userRoutes = require('./routes/userRoutes');


app.use(express.json());
app.use(express.static(path.join(__dirname,'views')));
app.use('/',userRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/facelink')
    .then (() => console.log('Connected to the database'))
        .catch(error => console.error('Failed to connect to the database'));

app.listen(PORT, ()=>{
    console.log(`Server kører på http://localhost:${PORT}`)
});