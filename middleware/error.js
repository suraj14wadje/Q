module.exports = function(err,req,res,next){
    log.error(err.stack)
    res.status(500).send("something went wrong ..");
}