
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const Auth=require('../models/Authmodel')

//register

const register=async(req, res) => { 
   const {username,password,email}=req.body;
  
    try {
        //check username
    if(!username || username.length<5){
       return res.json({error:"name is required and it should be atleast 5 characters"})
    }
    if(!password || password.length<5){
       return res.json({error:"password is required and it should be atleast 5 characters"})
    }
    
    //check email
        const check=await Auth.findOne({email:req.body.email})
       
        if(!check){
            let user=await new Auth();
            user.username=username;
            user.email=email;
            const salt = await bcrypt.genSaltSync(10);
            const hash =await bcrypt.hashSync(password, salt);
            user.password=hash;
           const doc=await user.save();
           console.log(doc)
          return  res.status(200).json({message:"registered successfull",data:doc})
        }  
        else{
          return  res.status(400).json({error:"email already exists"})
        }
    } catch (error) {
       return error;
    }
}


const login=async(req, res) => { 
    const {email,password}=req.body;
    const user=await Auth.findOne({email})
  
        if(user &&  (await bcrypt.compare(password,user.password))){
           return res.json({
            _id:user._id,
            username:user.username,
            email:user.email,
            token:generateToken(user._id),
            message:"login successful"
           }) 
        }
  else{
    return res.status(404).json({error:"invalid user"})
  }
}

//generatng token
const generateToken=(id)=>{
    return jwt.sign({id},process.env.SECRET_KEY,{
        expiresIn:'20d'
    });
}

const getuser=async(req,res)=>{    
    const{_id,email,username}= await Auth.findById(req.user.id)

    return res.status(200).json({_id,username,email})
}

module.exports={register,login,getuser};