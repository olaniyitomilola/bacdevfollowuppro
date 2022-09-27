const task = require('../model/task')


const getTasks = async (req,res)=>{

    try {
        const tasks = await task.find({})
        res.status(200).json({
            success : true,
            data: tasks
        })
        //triggered the error below after getting the documents
        // Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
        //because I didnt delete the code I commented after the catch blocks
    } catch (error) {
         res.status(500).json({
            success: false,
            msg: error.errors.name.message
        })
    }
    // res.status(200).json({
    //     success : true,
    //     data: task
    // })
}
const getSingleTask = async (req,res)=>{

    //{id:taskID} means find id in req.params and return as taskID

    try {
        const {id: taskID} = req.params;
        const singleTask = await task.findOne({_id: taskID})
    
        if(taskID == null){
            return res.status(401).json({
                success: false,
                msg: `No task with id: ${taskID}`
            })
           
        }
        res.status(200).json({
            success: true,
            data: {singleTask}
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: error
            
        })
    }
   

}
const createTask = async (req,res)=>{
    const {name} = req.body;

    if(!name){
       return res.status(401).json({
            success: false,
            msg: 'Kindly provide task details'
        })
    }
    try {
        const newTask = await task.create({name}) //put in trycatch to handle rejection error from
    //validation
    //personal preference, I will like to do my validation on the frontend first and use backend as back up
    //on the backend, i'll use the up layer that doesnt get to the database part at all too
        res.status(201).json({
            success: true,
            data: newTask
        })
    } catch (error/*big object*/) {
        
    }
    
}
const deleteTask = (req,res)=>{
    const{id} = req.params;

    res.status(200).json({
        success: true,
        data: ['deleting task']
    })
}
const editask = (req,res)=>{
    const {id} = req.params;
    const{task} = req.body

    res.status(200).json({
        success: true,
        data: ['editing task']

    })
}

module.exports = {
    editask,
    deleteTask,
    createTask,
    getSingleTask,
    getTasks
}