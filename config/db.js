import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected To MongoDB Database ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error in MongoDb ${error}`);
  }
};
export default connectDb;
