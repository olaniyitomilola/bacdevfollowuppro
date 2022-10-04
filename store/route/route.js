const express = require('express');
const router = express.Router();
const { getAllItems , getOneItem , queriedGet, updateItem , deleteItem , createNewItem } = require('../controller/controller');

router.route('/').get(getAllItems).post(createNewItem);
router.route('/:id').get(getOneItem).delete(deleteItem).patch(updateItem)
router.route('/search').get(queriedGet)

module.exports = router;