const{check}=require('express-validator')
const signupValidation=[
    check('name').notEmpty().withMessage('name is required')
    .isLength({min:3}).withMessage('name atleast three charaacters'),
    check('email').notEmpty().withMessage('email is required')
    .isEmail().withMessage('invalid memail'),
    check('password').notEmpty().withMessage('password is required')
    .isLength({min:6}).withMessage('atleast 6 cheracters')
    .matches('[a-z]').withMessage('password must be one alphabate'),
    check('phone').notEmpty().withMessage('phone is required')
    .isMobilePhone().withMessage('invalid phone')
    .isLength({max:11}).withMessage('not more than 11 charaacters'),
]
const loginValidation=[
    
    check('email').notEmpty().withMessage('email is required')
    .isEmail().withMessage('invalid memail'),
    check('password').notEmpty().withMessage('password is required')
    .isLength({min:6}).withMessage('atleast 6 cheracters')
    .matches('[a-z]').withMessage('password must be one alphabate'),
  
]
module.exports={signupValidation,loginValidation}