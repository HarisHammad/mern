const jwt = require('jsonwebtoken')
const User = require('../model/user-model')
const authMiddlewere =async (req,res,next)=>{
const token = req.header("Authorization");
if(!token){
   return res
   .status(401).json({msg:"token not provided http"})

}
const jwtToken = token.replace("Bearer",'').trim();
// console.log("token from authorized ",jwtToken);
try {
    const isVerified = jwt.verify(jwtToken ,process.env.JWT_SECRET_KEY)
    console.log(isVerified);


    const userData = await User.findOne({email:isVerified.email}).select('-password');
    console.log(userData);
    req.user = userData;
    req.token =token;
    req.id=userData._id;
    
    
    next()   
} catch (error) {
    res.status(401).json({msg:"uthorized invalied token"})
}


}
module.exports=authMiddlewere