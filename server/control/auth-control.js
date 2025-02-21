const User = require("../model/user-model");
const bcrypt = require("bcryptjs")
const home = async (req, res) => {
  try {
    res.status(200).send("hiiiiiiiiiiiiiiiiiiiiii3rd");
  } catch (e) {
    console.log(`me agya ${e}`);
  }
};

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, phone, email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
     return res.status(400).json({ message: "Email Already Exist" });
    }
    const newUser = await User.create({ username, phone, email, password });

    res.status(201).json({
       msg: "Registration successfull",
      token: await newUser.generateToken(),
      userId:newUser._id.toString(),


    });
  } catch (e) {
    // res.status(400).json("internal server error");     
    next(error)
  }
};




const login = async(req,res)=>{

  try {
    const{email,password}=req.body;
    const userExist = await User.findOne({email})
    if(!userExist){
      return  res.status(400).json({message:"invalide Email"})
    }
    const user = await userExist.comparePassword(password)
    // const user = await bcrypt.compare(password,userExist.password)
    if(user){  
    res.status(200).json({
      msg: "Login successfull",
     token: await userExist.generateToken(),
     userId:userExist._id.toString(),
   });
   console.log("login seccessfull");
   
    }else{
      res.status(401).json({message:"invalide password"})
    }
     } catch (e) {
    res.status(500).json("internal server error")
  }
}






  const user =async(req,res)=>{
  try {
    const userData = req.user;
    console.log("useroooo ", userData);
     return res.status(200).json({ userData })
  } catch (error) {
    console.log(`error from user route%${error}`);
    
  }
}




module.exports = { home, register ,login,user};
