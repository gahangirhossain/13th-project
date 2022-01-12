class Home{
    static get(req,res){
        res.send({
            msg:'Api is working on the browser'
        })
    }
}
module.exports=Home