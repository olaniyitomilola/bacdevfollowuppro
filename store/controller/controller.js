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
        const {featured, name, _id, rating, company, sort,fields} = req.query;
        const queryObject = {};

        if(featured){
            queryObject.featured = featured === 'true' ? true : false;
        }
        if(company){
            queryObject.company = company;
        }
        if(name){
            //search mongo regex pattermn for .includes
            queryObject.name = {$regex : name, $options:'i'}
        }


        let product =  Store.find(queryObject)

        if(sort){

            //when there are two sort parameters, thwy are seperated by space, since user will be providing the parameter with 
            //comma, we need to split into array by the comma and join tegether with space
            const sorting = sort.split (',').join (" ");
            product = product.sort(sorting);
            console.log(sorting)
        }

        //print out just field listed
        if(fields){
            const sorting = fields.split (',').join (" ");
            product = product.select(sorting);
            console.log(sorting)
        }



        const products = await product
        res.status(200).json({
            products
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