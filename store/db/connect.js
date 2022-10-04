const db = require('mongoose');


const databaseConnector = (url) =>{
    return db.connect(url);
}

module.exports = databaseConnector;