const { json } = require('express')
const Store = require('../model/model')

const getAllItems = async(req,res)=>{
    try {
        const products = await Store.find({
        })
       res.status(200).json({
           products,
           num: products.length
       })
    } catch (error) {
        res.status(500).json({
            msg: error
        })
    }
}
const getOneItem = async(req,res)=>{
    try {
        res.status(200).json({
            msg : "get one Item"
        })
    } catch (error) {
        
    }
}
const queriedGet = async(req,res)=>{
    try {
        const {featured, name, _id, rating, company} = req.query;
        const queryObject = {};

        if(featured){
            queryObject.featured = featured === 'true' ? true : false;
        }
        if(company){
            queryObject.company = company;
        }


        const product = await Store.find(queryObject)
        res.status(200).json({
            product
        })
        
    } catch (error) {
        res.status(500).json({
            msg: error
        })
    }
}
const createNewItem = async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}
const updateItem = async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}
const deleteItem = async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}

module.exports = { getAllItems , getOneItem , queriedGet, updateItem , deleteItem , createNewItem }