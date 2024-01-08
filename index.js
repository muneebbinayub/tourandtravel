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

// Access control
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, token');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  next();
});



//middlewares
app.use(express.json());

app.use("/", router);

app.listen(port, () => {
  console.log("listning on port: ", port);
});
