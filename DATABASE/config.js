import mongoose from "mongoose"

const connectDB =()=>{

    mongoose.connect(process.env.DB_URI)
        .then(()=>{console.log("DataBase Connected")})
        .catch((error)=>{console.log("ERROR",error)})
}

export default connectDB