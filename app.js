const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const sequelize = require('./Backend/util/database');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

async function startServer(){
    try{
        await sequelize.sync({force:false});
        app.listen(3000,()=>{
            console.log("Server is running")
        })
    }
    catch(err){console.log(err)};
}

startServer();