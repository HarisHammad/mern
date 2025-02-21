const express= require('express');
const services = require('../control/service-control')
const Servicerouter = express.Router();
Servicerouter.route('/service').get(services)
module.exports=Servicerouter