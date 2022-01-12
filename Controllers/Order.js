class OrderController{
    static getAll(req,res){
        res.send([
            'order 1',
            'order 2',
            'order 3'
        ]);
    }
}
module.exports=OrderController;