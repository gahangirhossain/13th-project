var jwt = require('jsonwebtoken');
function auth(req,res,next){
    console.log(req.headers.authorization)
    if(!req.headers.authorization)  return res.send('authorization failed')
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, 'MY_SECRET123', function (err,user){
         if(err) {
             res.send('authentication failed');
         }
          else {
              if (!user.active) return res.send('you are not permited')
              next();           
          }
        
    });
    
}
module.exports=auth;