const {z} = require('zod');

const signupSchema = z.object({
    username:z
    .string({required_error:"Name is Requiered"}).trim()
    .min(3,{message:"Name at least must be 3 char"})
    .max(255,{message:"Name must not be more then 255 char"}),
    email:z
    .string({required_error:"Email is Requiered"}).trim()
    .email({message:"envalide email address"})
    .min(3,{message:"email at least must be 3 char"})
    .max(255,{message:"email must not be more then 255 char"}),
    phone:z
    .string({required_error:"phone is Requiered"}).trim()
    .min(10,{message:"phone at least must be 10 char"})
    .max(20,{message:"phone must not be more then 20 char"}),
    password:z
    .string({required_error:"password is Requiered"}).trim()
    .min(6,{message:"password at least must be 6 char"})
    .max(255,{message:"password must not be more then 255 char"}),
})

module.exports=signupSchema