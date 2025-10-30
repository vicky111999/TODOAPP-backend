import todomodel from "../DATABASE/todomodel.js"

export const completion = async(req,res)=>{
try{
    const {id} = req.params
    const {completed} = req.body

    const find = await todomodel.findById(id)

    if (!find) return res.status(404).json({success:false,message:"NOt found id"})

    await todomodel.findByIdAndUpdate(id,{completed:completed})  

    return res.status(200).json({success:true,message:" Task Completed"})
}
catch(error){
        return res.status(500).json({success:false,message:error.message})
}
}