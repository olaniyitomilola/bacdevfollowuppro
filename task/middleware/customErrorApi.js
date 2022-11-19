class CustomErrorApi extends Error {
    constructor(message, statusCode){
        super(message)
        this.statusCode = statusCode
    }
}

const createError = (msg,statusCode)=>{
    return new CustomErrorApi(msg,statusCode)
}

module.exports = {CustomErrorApi,createError};