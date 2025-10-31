import todomodel from "../DATABASE/todomodel.js"



export const pendingtask = async(req,res)=>{

    try{
    const find = await todomodel.find({completed:false})
    if(!find) return res.status(404).json({success:false,message:"NO tasks available"})

        return res.status(200).json({success:true,data:find})
}
catch(error){
    return res.status(500).json({success:false,message:error.message})
}
}