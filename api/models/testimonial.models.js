import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true,
    },
    review:{
        type:String,
        unique:true,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    }
},{timestamps:true})

const TestimonialModel = mongoose.model("testimonial",testimonialSchema);

export default TestimonialModel;