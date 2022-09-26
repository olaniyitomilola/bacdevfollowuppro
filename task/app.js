const express  = require('express');
const connectDB = require('./db/connect')
require('dotenv').config()

const app = express();
const taskrouter = require('./route/task'); 



const port = 4000;


app.use(express.urlencoded({extended: false}));
app.use(express.json())
app.use(express.static('./public'))

app.use('/taskapp',taskrouter)

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port: ${port}`))
    } catch (error) {
        console.log(error);
    }
}
start();
    
    
         
     
       
    
