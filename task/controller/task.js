const getTasks = (req,res)=>{
    res.status(200).json({
        success : true,
        data: ['all task page']
    })
}
const getSingleTask = (req,res)=>{
    const {id} = req.params;

    res.status(200).json({
        success: true,
        data: ['single task page']
    })
}
const createTask = (req,res)=>{
    const {task} = req.body;

    if(!task){
       return res.status(401).json({
            success: false,
            msg: 'Kindly provide task details'
        })
    }
    res.status(200).json({
        success: true,
        data: task
    })
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