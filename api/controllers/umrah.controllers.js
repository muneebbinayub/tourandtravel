import packageModel from "../models/package.models.js";

const umrah = async(req,res)=>{
try{    const response = await packageModel.find()
    if(response){
        res.status(200).json({message:"data sent",data:response})
    }
    else{
        res.status(400).json({message:"data not sent",data:response})
    }}catch(err){
        res.status(504).json({message:"Internal server error"})
        console.log("internal server error",err);
    }
}

export default umrah;