const express = require('express');
const router = express.Router()
const {
    editask,
    deleteTask,
    createTask,
    getSingleTask,
    getTasks
} = require('../controller/task')

router.route('/').get(getTasks).post(createTask)
router.route('/task/:id').get(getSingleTask).put(editask).delete(deleteTask)

module.exports = router;