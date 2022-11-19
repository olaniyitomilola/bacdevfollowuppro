const express  = require('express');
const connectDB = require('./db/connect')
require('dotenv').config()
const notfound = require('./middleware/notfound')
const errorHandler = require('./middleware/errorHandler')


const app = express();
const taskrouter = require('./route/task'); 

const port = process.env.PORT || 4000;

app.use(express.urlencoded({extended: false}));
app.use(express.json())
app.use(express.static('./public'))

app.use('/taskapp',taskrouter)
app.use(notfound)
app.use(errorHandler)


const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port: ${port}`))
    } catch (error) {
        console.log(error);
    }
}
start();
    
    
         
     
       
    
