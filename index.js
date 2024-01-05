import express from "express";
import router from "./api/routes/routes.js";
import mongoose from "mongoose";

mongoose
  .connect("mongodb://127.0.0.1/khadimul")
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
const port = 8000;

//middlewares
app.use(express.json());

app.use("/", router);

app.listen(port, () => {
  console.log("listning on port: ", port);
});
