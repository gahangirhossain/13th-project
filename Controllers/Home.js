class Home{
    static get(req,res){
        res.send({
            msg:'Api is working'
        })
    }
}
module.exports=Home