import todomodel from "../DATABASE/todomodel.js"


export const charting = async(req,res)=>{

    try{
            const completetask = await todomodel.filter(t=>t.completed).length
            const pendingtask  = await todomodel.filter(t=>!t.completed).length

            return res.status(200).json({success:true,data:{completetask,pendingtask}})
    }
    catch(error){
        return res.status(500).json({success:false,message:error.message})
    }
}