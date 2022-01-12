class Product{
    static get(req,res){
        res.send([
            {
                name:'hp laptop',
                price:70000,
                category:'electronics'
            }
        ])
    }
    static post(req,res){
        console.log(req.headers);
        res.send('ok')
    }
}
module.exports=Product