const {z}=require('zod')
const loginSchema =z.object({
    email:z
    .string({required_error:"Email is Requiered"}).trim()
    .email({message:"invalide email address"})
    .min(3,{message:"email at least must be 3 char"})
    .max(255,{message:"email must not be more then 255 char"}),
  
    password:z
    .string({required_error:"password is Requiered"}).trim()
    .min(6,{message:"password at least must be 6 char"})
    .max(255,{message:"password must not be more then 255 char"}),
})
module.exports=loginSchema