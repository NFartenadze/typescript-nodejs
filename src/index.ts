import * as dotenv from "dotenv";

dotenv.config();

// mongoose
//   .connect(process.env.MONGODB_URI!)
//   .then(() => {
//     console.log("Connected to MongoDb");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

import express from "express";
import { errorHandler } from "./middleware/errorHandler";

const app = express();

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
