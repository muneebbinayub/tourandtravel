import packageModel from "../models/package.models.js";

const packageController = async(req, res) => {
  try {
    const {
      month,
      depDate,
      ArrDate,
      madinahHotel,
      makkahHotel,
      Price,
      duration,
      type,
    } = req.body;

    const newPackageData = new packageModel({
      month,
      depDate,
      ArrDate,
      madinahHotel,
      makkahHotel,
      Price,
      duration,
      type,
    });

    const response = await newPackageData.save();

    if (response) {
      res.status(201).json({ message: "package saved successfully" });
    } else {
      res.status(400).json({ message: "package data not saved" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "internal server error" });
  }
};

export default packageController;
