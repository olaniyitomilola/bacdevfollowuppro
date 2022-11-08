const mongoose = require('mongoose');


//name String
//completed boolen
//only properties set in the schema will be saved while sending to database, others will be ignore
//se up validation in schema tood

const Taskschema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"must provide name"],
        trim: 'true',
        maxlength: [20, 'name must not be more than 20 Characters'],
        minlength: [3,'name cannot be less than 3 characters']
    }, 
    
    completed: {
        type: Boolean,
        default: false

    }
})
module.exports = mongoose.model('Task',Taskschema)
