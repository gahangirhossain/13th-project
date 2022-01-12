const mongoose=require('mongoose');
const MONGO_URL='mongodb+srv://gahangir:misho123456@cluster0.qkmeu.mongodb.net/validations?retryWrites=true&w=majority'
async function connectDB(){
    try{
       await mongoose.connect(MONGO_URL);
       console.log('DB CONNECTED')
    }catch(error){
        console.log(error)
    }
}
module.exports=connectDB