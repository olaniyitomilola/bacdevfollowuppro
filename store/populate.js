//populate database with existing products

require('dotenv').config()

const connectDB = require('./db/connect')
const Product = require('./model/model')

const jsonProducts = require('./product.json')

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    //delete allm existing data in database, if any exists
    await Product.deleteMany()
    //populate database with array in project json
    await Product.create(jsonProducts)
    console.log('Success!!!!')
   
   //stop the process
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()