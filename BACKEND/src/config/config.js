import dotenv from "dotenv";
dotenv.config();

if(!process.env.MONGO_URI){
    throw new Error("MONGO_URI is not defined in environemnt variable")
}
if(!process.env.JWT_SECRET){
    throw new Error("MONGO_URI is not defined in environemnt variable")
}

export const CONFIG = {
    MONGO_URI : process.env.MONGO_URI,
    JWT_SECRET : process.env.JWT_SECRET
}