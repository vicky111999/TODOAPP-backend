import todomodel from "../DATABASE/todomodel.js"


export const todoallitemviewcontroller = async(req,res) => {
            try
            {
                const find = await todomodel.find({MentionDate:{$gte:Date.now()}})
                if(!find) 
                    {
                      return res.json({success:false,message:"No Tasks"})
                    } 
                 
                return res.json({success:true,data:find,message:"Task fetched"})   
            }
            catch(error)
            {
                return res.json({success:false,message:error.message})
            }
    
}