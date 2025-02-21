const validatelogin = (Schema)=>async(req,res,next)=>{
try {
    const parsebodylogin =await Schema.parseAsync(req.body);
    req.body=parsebodylogin
    next()
} catch (err) {
    const extraDetail= err.errors[0].message ;
    const error ={ extraDetail}
    console.log(error);
   next(error)
}
}
module.exports=validatelogin