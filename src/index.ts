import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(
    "mongodb+srv://farnick1148:o1vvfQtCYh4ehKJK@cluster0.d9r34ci.mongodb.net/banking-system/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDb");
  })
  .catch((error) => {
    console.log(error);
  });
