const db = require('mongoose');

const storeSchema = new db.Schema({
    name: {
        type: String,
        required: [true, 'product name must be provided']},
    price: {
        type: Number,
        required: [true, 'product price must be provided']},
    featured: {
        type: String,
        default: false,
    },
    rating:{
        type: Number,
        default: 4.5
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company:{
        type: String,
        //enum is used toset available properties, just like select and options on html
        enum: {
            values:['ikea','liddy','caressa','marcos'],
            error: `{VALUE} is not one of the available options`
        } 
        
    }

})

module.exports = db.model('store',storeSchema);
