import dotenv from "dotenv";

import app from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: ".env",
});

const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log(error);
      throw error;
    });
    app.listen(PORT, () => console.log(`Server is running at port : ${PORT}`));
  })
  .catch((err) => {
    console.log("MongoDB connection failed", err);
  });
