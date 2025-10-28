import todomodel from "../DATABASE/todomodel"

export const edit = async (req,res)=>{

    try {
        
        const find = await todomodel.findById(req.params.id)

        if(find)
        {
            const edited = await todomodel.findByIdAndUpdate(req.params.id,req.body)
            return res.status(200).json({success:true, message:"Successfully updated"})
        }

            return res.json({success:false, message:"Id not found"})
    }
    catch(error){

      return  res.status(500).json({success:false, message:error.message})
    }
}