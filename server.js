
import bodyParser from "body-parser"
import express from "express"
import connectDB from "./DATABASE/config.js"
import routes from "./Routes/todolistroute.js"
import cors from "cors"
import dotenv from 'dotenv'

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())

app.use("/api/user",routes)

app.use(express.urlencoded({extended:true}))

const port = process.env.PORT ||  3002

app.listen(port,()=>{
    console.log(`sever is running in port ${port}`)
    connectDB()
})