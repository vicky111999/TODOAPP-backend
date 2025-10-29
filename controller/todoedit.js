import todomodel from "../DATABASE/todomodel.js"

export const edit = async (req,res)=>{

    

    try {
        
        const find = await todomodel.findById(req.params.id)
                    const {title,details,date} = req.body

        if(find)
        {
            const edited = await todomodel.findByIdAndUpdate(req.params.id,
           {itemcategory:title,
            itemdetails:details,
            MentionDate:date})
            return res.status(200).json({success:true, message:"Successfully updated"})
        }

            return res.json({success:false, message:"Id not found"})
    }
    catch(error){

      return  res.status(500).json({success:false, message:error.message})
    }
}