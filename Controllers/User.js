const { validationResult } = require("express-validator")
const User=require('../Models/User')
const bcrypt=require('bcryptjs')
var jwt = require('jsonwebtoken');
//custom resulr
const fieldErrorResults=validationResult.withDefaults({
    formatter:(error)=>{
        return error.msg
    }
})
class UserController{
   static async signup(req,res){
       const errors=fieldErrorResults(req);
       if(errors.isEmpty()){
           const {name,password,email,phone}=req.body;
           const salt = bcrypt.genSaltSync(10);
           let hashpassword = bcrypt.hashSync(password,salt);
           console.log(hashpassword)
           const user=await new User({name,password:hashpassword,email,phone}).save()
          res.send({
              msg:'account successfully created',
              payload:user
          })
       }
       else return res.json(errors.mapped());
       console.log(req.body)
        res.send('signup rout')
    }

    static async login(req,res){
        const errors=fieldErrorResults(req);
        if(errors.isEmpty()){
            const {password,email}=req.body;
            let user=await User.findOne({email}).lean().exec();
           if(!user){
               res.send({
                   msg:'there is no email user'
               })
           }
            else{
                if(bcrypt.compareSync(password,user.password)){
                    const {name,email,phone,active}=user;
                    const token = jwt.sign({name,email,phone,active}, 'MY_SECRET123');
                    console.log(token);
                    res.send({token : 'Bearer ' + token})
                }
                else {
                    res.send({msg:'password dosen\'t match'})
                }
            }
           
        }
        else return res.json(errors.mapped());
       
    }

static async activeUser(req,res){
    try{
         await User.updateOne(
         {_id:req.params.id},
         {
             $set:
             { active: true}
         }        
         ).exec();
      res.send('user activated')
    }catch(error){
        console.log(error);
        res.send(error.message);
    }
}

static async deleteUser(req,res){
    try{
         await User.deleteOne(
         {_id:req.params.id},
         {
             $set:
             { active: true}
         }        
         ).exec();
      res.send('user deleted successfully')
    }catch(error){
        console.log(error);
        res.send(error.message);
    }
}



    // static login(req,res){
    //     res.send('login rout')
    // }

}
module.exports=UserController