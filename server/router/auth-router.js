const express = require('express')
const authcontrol = require('../control/auth-control')
const signupSchema = require("../validators/auth-validators")
const validate = require("../middlewhere/validate-middlewhere")
const validatelogin =require("../middlewhere/validate-middlewerelogin")
const loginSchema = require('../validators/auth-validatelogin')
const authMiddlewere = require('../middlewhere/authMiddlewere')
const router = express.Router()
router.route('/').get(authcontrol.home)
router.route("/register").post(validate(signupSchema),authcontrol.register)
router.route("/login").post(validatelogin(loginSchema),authcontrol.login)
router.route("/user").get(authMiddlewere,authcontrol.user)
module.exports = router