const express = require('express');
const app = express();
const dbConnector = require('./db/connect');
const port = process.env.port || 3000;
const {starter,otherFunctions} = require('./functions')
const storeRouter = require('./route/route')
require('dotenv').config();
// require('async-errors')
const notFound = require('./middleware/notfound');
const errorhandler = require('./middleware/errorandler')
//localhost route

app.get('/',(req,res)=>{
    res.send('<h1>Store</h1><a href="/store/api/v1">Product page</a>')
})


app.use('/store/api/v1',storeRouter);
//THe not found is supposedm to be after the routes
app.use(notFound);
app.use(errorhandler);
app.use(express.static('./public'));
app.use(express.json);
app.use(express.urlencoded({extended : false}))





starter(app,process.env.MONGO_URI,dbConnector,port);
