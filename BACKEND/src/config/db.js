import mongoose from "mongoose";
import {CONFIG} from "./config.js"

const connectToDb = async () => {
    await mongoose.connect(CONFIG.MONGO_URI);
    console.log("Mongo Db connected")
}

export default connectToDb;