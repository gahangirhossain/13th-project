const mongoose=require('mongoose');
const Schema=require.Schema;
const ProductSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    tags:{
        type:[String],
        required:true
    }
})
const Product=mongoose.model('product',ProductSchema)
module.exports=Product