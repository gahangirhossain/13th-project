const {urlencoded}=require('express')
const express=require('express');
const app=express()
const Product=require('./Controllers/Product')
const Home=require('./Controllers/Home')
const UserController=require('./Controllers/User')
const OrderController=require('./Controllers/Order')
const auth=require('./Helpers/auth')
// const{check,validationResult}=require('express-validator')
// const{check}=require('express-validator')
const {signupValidation,loginValidation}=require('./Validations/user')
const connectDB=require('./utils/db')
connectDB()
app.use(urlencoded({extended:true}))
app.use(express.json())

app.get('/',Home.get)
app.get('/products',Product.get)
app.post('/products',Product.post)
app.post('/signup',signupValidation, UserController.signup)
app.post('/login',loginValidation, UserController.login)
// app.post('/login',UserController.login)
app.get('/active-user/:id',UserController.activeUser)
app.get('/all-order',
//  (req, res, next)=>{
//      const token = req.header.authorization;
//      next()
//  },
auth,
OrderController.getAll)
app.delete('/active-user/:id',UserController.deleteUser)

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log('app is running in http://localhost:5000'))