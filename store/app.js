const express = require('express');
const app = express();
const dbConnector = require('./db/connect');
const port = process.env.port || 3000;
const {starter,otherFunctions} = require('./functions')
const storeRouter = require('./route/route')
require('dotenv').config();

app.use('/store/api/v1',storeRouter);
app.use(express.static('./public'));
app.use(express.json);
app.use(express.urlencoded({extended : false}))




starter(app,process.env.MONGO_URI,dbConnector,port);
