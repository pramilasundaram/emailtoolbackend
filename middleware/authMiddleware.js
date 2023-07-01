const Auth=require("../models/Authmodel");
const jwt=require('jsonwebtoken');

const auth =async (req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer'))
{
    try {
    token=req.headers.authorization.split(" ")[1];
    console.log(token)
    
    // to find id
    const decode=jwt.verify(token,process.env.SECRET_KEY);
    req.user=await Auth.findById(decode.id).select('-password')
next();
} catch (error) {
    return res.status(401).json({
        error:"Not authorized,wrong token"
    })
}
if (!token) {
    return res.status(401).json({
        error:"Not authorized,no token"
    })
}
}
}

module.exports={auth};