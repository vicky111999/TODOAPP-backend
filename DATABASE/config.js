import mongoose from "mongoose"

const connectDB =()=>{

    mongoose.connect("mongodb://127.0.0.1:27017/todo")
        .then(()=>{console.log("DataBase Connected")})
        .catch((error)=>{console.log("ERROR",error)})
}

export default connectDB