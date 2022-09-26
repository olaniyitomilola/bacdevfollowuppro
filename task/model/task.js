const mongoose = require('mongoose');


//name String
//completed boolen
const Taskschema = new mongoose.Schema({
    name: String, completed: Boolean
})
module.exports = mongoose.model('Task',Taskschema)