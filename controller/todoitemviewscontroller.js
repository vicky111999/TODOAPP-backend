
import todomodel from "../DATABASE/todomodel.js"

export const categories = async (req,res)=>{

        
   const {title} = req.query

        if(!title) return res.json({success:false, data:"Missing Details",message:"Misssing Details"})
         
         try
         {
               const isDate= !isNaN(Date.parse(title))

            const Findtitle = await todomodel.find({
               $or:[
                  {itemcategory:{$regex:title,$options:"i"}},
                  ...(isDate ? [{MentionDate:new Date(title)}] : [])
               ]
            })


            if(!Findtitle)
            { 
            return res.json({success:false , message:"Invalid tittle"})
          }

          return res.json({success:true,data:Findtitle,message:"successfully fetched"})

               
         }  
         catch(error)
         {
            return res.json({success:false , message: error.message})
         } 

}


export const Pending =async(req,res)=>{

      try
      {
         const find = await todomodel.find({MentionDate:{$lte:Date.now()}})

         if(!find)
         {
            return res.status(204).json({success:false,data:"No rsults",message:"Not Found"})
         } 
          return res.status(200).json({success:true,data:find,message:"Successfully fetched data"})  
      }
      catch(error)
      {
         return res.status(500).json({success:false,message:error.message})
      }
}