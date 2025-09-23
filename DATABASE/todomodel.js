import mongoose from "mongoose";

const todoschema = new mongoose.Schema({
        id:{
                type:String,
                required:true,
                unique:true
        },
        itemcategory:{
                    type:String,
                    required:true,
                      
        },
        itemdetails:{
                    type:String,
                    required:true,
        },
        MentionDate:{
                        type:Date,
                        required:true,
        },
        completed:{
                    type:Boolean,
                    default:false,
        }
} ,{timestamps:true})

const todomodel = mongoose.model ('list',todoschema)

export default todomodel