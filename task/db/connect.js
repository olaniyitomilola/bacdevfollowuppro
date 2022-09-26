const mongoose = require('mongoose')

const connectionString = `mongodb+srv://olaniyi_t:bimbola_1@expressproject.o0r1el6.mongodb.net/taskapp?retryWrites=true&w=majority
`


const connectDB = (url) =>{
   return mongoose.connect(url)

}

module.exports = connectDB;