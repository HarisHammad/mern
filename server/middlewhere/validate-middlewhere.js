const validate = (Schema)=> async(req,res,next)=>{
    try {
         const parsebody=await Schema.parseAsync(req.body)
         req.body = parsebody
         next()
    } catch (err) {
     const status =422;
         const message = "fill the input properly";
         const extraDetail= err.errors[0].message ;
          const error={
               status ,
               extraDetail,
               message
          }
         console.log(error);
         next(error)
     //     res.status(400).json({msg:message})
        
    }
}
         module.exports=validate