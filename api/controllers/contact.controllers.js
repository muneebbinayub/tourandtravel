import contactModel from "../models/contact.model.js";

const contact = (req,res)=>{
try{    const {name,email,phone,message} = req.body;
    const newContactData =  new contactModel({
        name,
        email,
        phone,
        message,
    });
    const response = newContactData.save();

    if(response){
        res.status(201).json({message:"contact details saved"});
    }
    else{
        res.status(404).json({message:"could not save contact"})
    }}catch(err){
        console.log(err);
        res.status(500).json({message:"internal server error"});
    }
}

export default contact;