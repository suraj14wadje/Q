module.exports = function(err,req,res,next){
    log.info('from error')
    log.error(err.stack)
    res.status(500).send("something went wrong ..");
}