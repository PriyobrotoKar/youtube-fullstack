import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log(
      "MONGODB connection successfull running at Port : " + process.env.PORT
    );
  } catch (error) {
    console.log("MONGODB database connection error", error);
    process.exit(1);
  }
};

export default connectDB;
