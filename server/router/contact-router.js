const express = require('express')
const Contactrouter = express.Router();
const contactForm =require('../control/contact-control')
Contactrouter.route('/contact').post(contactForm)
module.exports=Contactrouter