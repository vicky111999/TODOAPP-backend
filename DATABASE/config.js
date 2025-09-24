import mongoose from "mongoose"

const connectDB =()=>{


    mongoose.connect(process.env.DB_URI,{
         useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(()=>{console.log("DataBase Connected")})
        .catch((error)=>{console.log("ERROR",error)})
}

export default connectDB