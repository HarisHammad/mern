const User = require('../model/user-model')
const Contact = require('../model/contact-model')
const allgetusers = async(req,res,next)=>{
try {
    const users = await User.find().select('-password')
    console.log(users);
    if(!users || users.lenght===0){
        res.status(404).json({message:'users not found'})
    }
  return  res.status(200).json(users)
} catch (error) {
    next(error)
}
}


const allgetcontacts = async(req,res,next)=>{
    try {
        const contacts = await Contact.find()
    console.log(contacts)
        if(!contacts || contacts.lenght===0){
            res.status(404).json({message:"contacts not found"})
        }
        return res.status(200).json(contacts)

    } catch (error) {
        next(error)
    }
}




// delete



const deleteuserbyID=async(req,res,next)=>{
try {
    const id = req.params.id;
    await User.deleteOne({_id:id})
    res.status(200).json({message:"data delete successfull"})
    
} catch (error) {
    next(error)
}
}

const deleteContactbyID=async(req,res,next)=>{
try {
    const id = req.params.id;
    await Contact.deleteOne({_id:id})
    res.status(200).json({message:"data delete successfull"})
    
} catch (error) {
    next(error)
}
}



// update get


const getuserbyID=async(req,res,next)=>{
try {
    const id = req.params.id;
  const data =  await User.findOne({_id:id}).select('-password')
    res.status(200).json(data)
} catch (error) {
    next(error)
}
}

const getContactbyID=async(req,res,next)=>{
try {
    const id = req.params.id;
  const data =  await Contact.findOne({_id:id}).select('-password')
    res.status(200).json(data)
} catch (error) {
    next(error)
}
}

// update 


const updateuserbyID=async(req,res,next)=>{
    try {
        const id = req.params.id;
        const updatedUserdata = req.body;
        const updateData = await User.updateOne({_id:id},{$set:updatedUserdata})
        return res.status(200).json(updateData)
    } catch (error) {
        next(error)
    }
    }

    const updateContactsbyID=async(req,res,next)=>{
        try {
            const id = req.params.id
            const updateconntactdata1 = req.body
            const updateContactsdata =await Contact.updateOne({_id:id},{$set:updateconntactdata1})
            return res.status(200).json(updateContactsdata)
        } catch (error) {
            console.log(error);
            
        }
    }
module.exports = {allgetusers,allgetcontacts,deleteuserbyID,getuserbyID,updateuserbyID,deleteContactbyID,getContactbyID,updateContactsbyID}