const AdminMiddlewere = async(req,res,next)=>{
    try {
        adminRole = req.user.isAdmin;
        if(!adminRole){
            res.status(400).json({message:"Your Are Not Admin"})
        }
        next()
    } catch (error) {
        next(error)
    }
}
module.exports=AdminMiddlewere