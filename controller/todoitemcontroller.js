import todomodel from "../DATABASE/todomodel.js";
import { v4 as uuidv4 } from "uuid";

export const itemAdd = async (req,res)=>{
            
        const {title,details,date} = req.body
        if(!title||!details||!date) return res.json({success:false,data:"Fill Details",message:"Missing details"})
        try{
        const Add = new todomodel({
            id:uuidv4(),
            itemcategory:title,
            itemdetails:details,
            MentionDate:date
        })
        await Add.save()
        res.json({success: true, data:"Added Successfully", message: " Item added"})
        }
        catch(error)
        {
            res.json({success: false, message: error.message})
        }
}

