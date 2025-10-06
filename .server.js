const express = require('express');
const app = express();
const cors = require ("cors")

app.use(express.json());
app.use(cors())

app.post('/api/toAdd',async (req,res)=>{
            
        const {title,details,date} = req.body
        if(!title||!details||!date) return res.json({success:false,data:"Fill Details",message:"Missing details"})
        try{
        const Add = new todomodel({
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
})


app.get('/api/pending', async(req, res) => {
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

});

app.get('/api/get', async(req, res) => {

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
    
})

const PORT = 3000
;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
