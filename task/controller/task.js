const Task = require('../model/task')
const asyncWrapper = require('../middleware/async');
const {createError} = require('../middleware/customErrorApi')


const getTasks = asyncWrapper(async (req,res)=>{

        const tasks = await Task.find({})
        res.status(200).json({
            success : true,
            data: tasks
        })
        //triggered the error below after getting the documents
        // Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
        //because I didnt delete the code I commented after the catch blocks
    // res.status(200).json({
    //     success : true,
    //     data: task
    // })
})
const getSingleTask = asyncWrapper(async (req,res, next)=>{

    //{id:taskID} means find id in req.params and return as taskID

 
        const {id: taskID} = req.params;
        const singleTask = await Task.findOne({_id: taskID})
 
        if(!singleTask){
            return next(createError(`No task with the ID: ${taskID}`, 404))
       
        }
        res.status(200).json({
            success: true,
            data: {singleTask}
        })
    //handle the error in both if == nul and catch. The if id pattern is right but the item does ot exist
    //the catch is thrown when the paatern doesnt match.
   

})
const createTask = asyncWrapper ( async (req,res)=>{
    const {name} = req.body;

    if(!name){
       return res.status(401).json({
            success: false,
            msg: 'Kindly provide task details'
        })
    }

    const newTask = await Task.create({name}) //put in trycatch to handle rejection error from
    //validation
    //personal preference, I will like to do my validation on the frontend first and use backend as back up
    //on the backend, i'll use the up layer that doesnt get to the database part at all too
        res.status(201).json({
            success: true,
            data: newTask
        })
    
})
const deleteTask = asyncWrapper(async (req,res,next)=>{
    const{id : taskId} = req.params;
        const task = await Task.findOneAndDelete({_id: taskId});
        if(!task){
        
            return next(createError(`No task with task id ${taskId}`,404))
        }
        res.status(200).json({
            success: true,
            data: task
        })
        
    //handle the error in both if == nul and catch. The if id pattern is right but the item does ot exist
    //the catch is thrown when the paatern doesnt match.

   
})
const editask = asyncWrapper(async (req,res)=>{
    const {id} = req.params;
    //the update metghod takes a third arguement, the option object, here you set the result
    //returned after update. The default is the before documentm, change it to the new with
    // the new key and to enforce the schema on the update, you need to set the runValidators.
    
        const task = await Task.findOneAndUpdate({_id: id},req.body,{
            new : true,
            runValidators: true 
        })
        if(!task){
            return next(createError(`No task with task id ${taskId}`,404))
        }

        res.status(200).json({
            success: true,
            data: task
    
        })

})

module.exports = {
    editask,
    deleteTask,
    createTask,
    getSingleTask,
    getTasks
}