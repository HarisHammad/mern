const {Schema,model}=require('mongoose')
const contactSchema = new Schema({
    username:{require:true,type:String},
    email:{require:true,type:String},
    message:{require:true,type:String}
})
const Contact = new model("Contact", contactSchema)
module.exports=Contact