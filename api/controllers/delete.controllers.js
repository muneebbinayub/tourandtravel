import packageModel from "../models/package.models.js";

const deletepackage = async(req,res)=>{
    try{
        const id = req.params.id;
        const response = await packageModel.findByIdAndDelete(id);
        if(response){
            res.status(200).json({message:"item deleted"});
        }
        else{
            res.status(404).json({message:"item not deleted"});
        }
    }catch(err){
        res.status(500).json({message:"internal server error"});
    }
}

export default deletepackage;