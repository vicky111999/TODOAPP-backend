import todomodel from "../DATABASE/todomodel"


export const  Deleted = async(req,res)=>{

    try{

        const find = await todomodel.findById(req.params.id)

        if(find){
        const findby = await todomodel.findByIdAndDelete(req.params.id)

        return res.status(200).json({success:true, message:"Successfully Deleted"})
        }

        return res.json({success:false,message:"Id not found"})
    }
    catch(error){

        return res.status(500).json({success:false, message:error.message})
    }
}

