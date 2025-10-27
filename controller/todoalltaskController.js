import todomodel from "../DATABASE/todomodel";



export const alltask = async(req,res) => {
            try
            {
                const find = await todomodel.find({})
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