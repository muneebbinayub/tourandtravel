import mongoose from "mongoose";

const packageSchema = mongoose.Schema({
    month:{
        type:String,
        required:true,
        lowercase:true,
    },
    depDate:{
        type:String,
        required:true,
        lowercase:true,
    },
    ArrDate:{
        type:String,
        required:true,
        lowercase:true,
    },
    madinahHotel:{
        type:String,
        required:true,
        lowercase:true,
    },
    makkahHotel:{
        type:String,
        required:true,
        lowercase:true,
    },
    Price:{
        type:String,
        required:true,
        lowercase:true,
    },
    duration:{
        type:String,
        required:true,
        lowercase:true,
    },
    type:{
        type:String,
        required:true,
        lowercase:true,
    },
},{timestamps:true});

const packageModel = mongoose.model("Package",packageSchema);

export default packageModel;