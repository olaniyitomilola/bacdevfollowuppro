const express  = require('express');
const app = express();
const taskrouter = require('./route/task');


app.use(express.urlencoded({extended: false}));
app.use(express.json())
app.use(express.static('./public'))

app.use('/taskapp',taskrouter)

app.listen(4000)