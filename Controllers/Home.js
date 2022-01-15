class Home{
    static get(req,res){
        res.send({
            msg:'Api is working on the Browser'
        })
    }
}
module.exports=Home