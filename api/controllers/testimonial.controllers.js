import TestimonialModel from "../models/testimonial.models.js";

const testimonial = async (req, res) => {
  try { 
    const {name, review, email } = req.body;
    const testiData = new TestimonialModel({
      name:name,
      review:review,
      email:email,
    });
    const response = await testiData.save();
    if (response) {
      res.status(200).json({ message: "testi saved success" });
    } else {
      res.status(404).json({ message: "testi not saved" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "internal server error" });
  }
};

export default testimonial;
