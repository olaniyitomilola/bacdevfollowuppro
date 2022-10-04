const starter = async(app,url,connector,port) =>{
    try {
        await connector(url);
        app.listen(port, ()=>{
            console.log(`server is listening on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}
const otherFunctions = ()=>{

}

module.exports = {starter,otherFunctions};
