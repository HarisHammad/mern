require('dotenv').config()
const express = require("express")
const app = express()
const connectdb = require('./utils/db')
const router = require('./router/auth-router')
const Contactrouter =require("./router/contact-router")
const cors = require("cors")
const errorMiddlewere = require("./middlewhere/error-middilewhere")
const Servicerouter=require('./router/services-router')
const adminrouter = require('./router/admin-router')
const corsOption={
    origin:'http://localhost:5173',
    methed:'GET,POST,PUT,DELETE,PATCH,HEAD',
    credentials:true
}

app.use(cors(corsOption))
app.use(express.json())
app.use('/oye',router)
app.use("/oye",Contactrouter)
app.use('/oye',Servicerouter)
app.use('/admin',adminrouter)
app.use(errorMiddlewere)
const port = 1000
connectdb().then(()=>{
app.listen(port,()=>{
    console.log(port);
    
})
})
