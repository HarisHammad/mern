const Contact = require('../model/contact-model')
const contactForm =async (req,res)=>{
    try {
        const response = req.body;
        await Contact.create(response)
        return res.status(200).json({msg:"message send Successfuly"})
    } catch (error) {
        return res.status(500).json({msg:"message not deleverd"})  
    }
}
module.exports=contactForm